import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  Res,
  Req,
  Ip,
  ValidationPipe,
} from "@nestjs/common";
import { Response, Request } from "express";
import { NoteService } from "./note.service";
import { CreateNoteDto } from "./dto/create-note.dto";

@Controller("note")
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post("createNote")
  @UsePipes(new ValidationPipe())
  async create(
    @Body() createNoteDto: CreateNoteDto,
    @Res() res: Response,
    @Req() req: Request
  ) {
    const result: any = await this.noteService.createNote(
      createNoteDto,
      req.cookies.authToken
    );
    if (result.note) {
      return res.send(result);
    } else {
      return res.status(403).send(result);
    }
  }

  @Get("getNotes")
  async getNoteList(@Req() req: Request, @Res() res: Response) {
    const result = await this.noteService.getNotes(req.cookies.authToken);
    return res.send(result);
  }

  @Post("deleteNote")
  async deleteNote(
    @Body() body: { id: string },
    @Req() req: Request,
    @Res() res: Response
  ) {
    const result = await this.noteService.deleteNote(
      body.id,
      req.cookies.authToken
    );
    console.log(result);
    if (result.id) {
      return res.send(result);
    } else {
      return res.status(403).send(result);
    }
  }
}
