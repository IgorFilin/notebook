import { Injectable } from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Note } from "./entities/note.entity";

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(User)
    private UserTable: Repository<User>,
    @InjectRepository(Note)
    private NoteTable: Repository<Note>
  ) {}

  async getNotes(params: any) {
    console.log("попали");
  }

  async createNote(body: CreateNoteDto, token: string) {
    const user = await this.UserTable.findOneBy({ authToken: token });
    const note = new Note();
    note.title = body.title;
    note.description = body.description;
    note.user = user;
    this.NoteTable.save(note);
  }
}
