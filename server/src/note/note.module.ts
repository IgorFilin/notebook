import { Module } from "@nestjs/common";
import { NoteService } from "./note.service";
import { NoteController } from "./note.controller";

@Module({
  imports: [],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
