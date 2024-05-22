import {
  Module,
  NestModule,
  MiddlewareConsumer,
  OnModuleInit,
} from "@nestjs/common";
import { UsersService } from "./user.service";
import { UsersController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { JwtModule } from "@nestjs/jwt";
import { EmailService } from "src/email/email.service";
import { MemoryStoredFile, NestjsFormDataModule } from "nestjs-form-data";
import { UserSubscriber } from "src/dataBaseChangeObserver/database-change.service";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: process.env.SECRET_REGISTER_KEY,
        signOptions: {
          expiresIn: "1h", // Время жизни токена
        },
      }),
      inject: [ConfigService],
    }),
    // Модуль парсит входящую форм дату в читаемый обьект
    NestjsFormDataModule.configAsync({
      useFactory: () => ({
        storage: MemoryStoredFile,
      }),
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, EmailService, UserSubscriber],
})
export class UsersModule implements OnModuleInit {
  constructor(private readonly userService: UsersService) {}

  async onModuleInit() {
    await this.userService.createTestUser();
  }
}
