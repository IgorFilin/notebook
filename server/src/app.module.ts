import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from "./users/user.module";
import { User } from "./users/entities/user.entity";
import { EmailService } from "./email/email.service";
import { NoteModule } from "./note/note.module";
import { Note } from "./note/entities/note.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: configService.get("BD_HOST"),
        port: configService.get("BD_PORT"),
        username: configService.get("BD_USERNAME"),
        password: configService.get("BD_PASSWORD"),
        database: configService.get("BD_DATABASE"),
        entities: [User, Note],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    NoteModule,
  ],
  controllers: [AppController],
  providers: [AppService, EmailService],
})
export class AppModule {}
