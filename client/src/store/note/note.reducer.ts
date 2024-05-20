import { createReducer, on } from '@ngrx/store';
import { getNotes, setNote, setNotes } from './note.actions';

export interface NoteType {
  id: string;
  title: string;
  description: string;
  date: string;
}

const notes: Array<NoteType> = [];

export const NotesReducer = createReducer(
  notes,
  on(setNote, (state, { note }) => {
    const asd = [...state, note];
    return [...state, note];
  }),
  on(setNotes, (state, { notes }) => {
    return [...notes];
  })
);
