import { BadRequestException, Injectable, Res } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { randomBytes } from "crypto";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { EmailService } from "src/email/email.service";
import * as fs from "node:fs";
import * as path from "path";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private UserTable: Repository<User>,
    private JwtService: JwtService,
    private readonly emailService: EmailService
  ) {}

  blockedKeysSendingMails = {};

  async createTestUser() {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash("test", salt);
    const token = this.JwtService.sign({
      name: "test",
      password: "test",
    });

    const testUser = this.UserTable.create({
      id: "test",
      email: "test@test.ru",
      password: hashedPassword,
      isAcceptKey: true,
      acceptKey: "someKey",
      authToken: token,
      date: new Date(),
    });
  }

  async create(createUserDto: CreateUserDto) {
    try {
      const findUser = await this.UserTable.findOneBy({
        email: createUserDto.email,
      });
      if (findUser) {
        return { message: "К сожалению такая почта уже существует" };
      } else {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
        const confirmRegKey = randomBytes(5).toString("hex");

        const token = this.JwtService.sign({
          name: createUserDto.name,
          password: createUserDto.password,
        });

        // Создаем пользователя по сущности
        const user = new User();
        user.email = createUserDto.email;
        user.password = hashedPassword;
        user.date = new Date();
        user.isAcceptKey = false;
        user.acceptKey = confirmRegKey;
        user.authToken = token;

        // Сохраняем в БД пользователя с регистрационным key
        this.UserTable.save(user);
        // Отсылаем на почту ключ подтверждения
        await this.emailService.sendConfirmationEmail(
          user.email,
          confirmRegKey
        );

        // Возвращаем значение что ключ на почту отправлен, но не подтвержден
        return {
          isAcceptKey: false,
          email: user.email,
          message: `Приветствую ${user.email}, пожалуйста введи код подтверждения`,
        };
      }
    } catch (e) {}
  }

  async sendMainConfirm(email: string) {
    const user = await this.UserTable.findOneBy({ email });
    try {
      if (user && !this.blockedKeysSendingMails.hasOwnProperty(email)) {
        this.blockedKeysSendingMails[email] = true;
        await this.emailService.sendConfirmationEmail(
          user.email,
          user.acceptKey
        );
        setTimeout(() => {
          delete this.blockedKeysSendingMails[email];
        }, 7000);
        return {
          message: "Повторное сообщение с кодом отправлено вам на почту",
        };
      } else {
        return {
          message: "Пожалуйста отправьте повторное письмо чуть позже",
          isBlocked: true,
        };
      }
    } catch (e) {
      console.log(e);
    }
  }

  async confirmRegistration(key: string) {
    try {
      const acceptUser = await this.UserTable.findOneBy({ acceptKey: key });
      if (acceptUser) {
        acceptUser.isAcceptKey = true;
        await this.UserTable.save(acceptUser);
        return {
          isAcceptKey: true,
          token: acceptUser.authToken,
          message: `Добро пожаловать ${acceptUser.email}`,
        };
      } else {
        return { message: "К сожалению код не верный, попробуйте ещё раз" };
      }
    } catch (e) {}
  }

  async login(LoginUserDto: LoginUserDto) {
    if (LoginUserDto.email === "" || LoginUserDto.password === "") {
      throw new BadRequestException(
        "К сожалению недостаточно данных для авторизации"
      );
    }
    const user = await this.UserTable.findOneBy({ email: LoginUserDto.email });
    if (user && !user.isAcceptKey) {
      throw new BadRequestException("Пожалуйста подтвердите вашу почту");
    }
    if (user && Object.keys(user).length) {
      const userPasswordValid = await bcrypt.compare(
        LoginUserDto.password,
        user.password
      );
      if (userPasswordValid) {
        return {
          message: `Добро пожаловать ${user.email}`,
          token: user.authToken,
          isAuth: true,
          id: user.id,
        };
      } else {
        throw new BadRequestException("Неверный пароль");
      }
    } else {
      throw new BadRequestException(
        "К сожалению такого пользователя не существует"
      );
    }
  }

  async confirmToken(requestToken: any) {
    if (!requestToken) {
      return { isAuth: false };
    }
    try {
      const user = await this.UserTable.findOneByOrFail({
        authToken: requestToken,
      });
      return {
        token: user.authToken,
        isAuth: true,
        id: user.id,
      };
    } catch (error) {
      return { isAuth: false };
    }
  }

  async findAll() {
    try {
      return await this.UserTable.find({ select: ["id"] });
    } catch (e) {}
  }
}
