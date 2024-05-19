import { Module } from "@nestjs/common";
import { NoteService } from "./note.service";
import { NoteController } from "./note.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { Note } from "./entities/note.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User, Note])],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
