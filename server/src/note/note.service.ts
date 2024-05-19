import { Injectable } from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note.dto";

@Injectable()
export class NoteService {
  async getNotes(params: any) {
    console.log("попали");
  }

  async createNote(body: CreateNoteDto) {
    console.log(body);
  }
}
