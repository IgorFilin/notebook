import { Note } from "src/note/entities/note.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("Users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isAcceptKey: boolean;

  @Column()
  acceptKey: string;

  @Column()
  authToken: string;

  @CreateDateColumn()
  date: Date;

  @OneToMany(() => Note, (note) => note.user)
  notes: Note[];
}
