import { MinLength, IsString, Validate, IsDateString } from "class-validator";

export class CreateNoteDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
