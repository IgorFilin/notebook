import { createReducer, on } from '@ngrx/store';
import { getNotes, setNotes } from './note.actions';

export interface NoteType {
  id: string;
  title: string;
  description: string;
  date: string;
}

const notes: Array<NoteType> = [];

export const NotesReducer = createReducer(
  notes,
  on(setNotes, (state, { note }) => {
    const asd = [...state, note];
    console.log(asd);
    return [...state, note];
  })
);
