import { createReducer, on } from '@ngrx/store';
import { getNotes, setNotes } from './note.actions';

export interface NoteType {
  title: string;
  description: string;
  date: string;
}

const notes: Array<NoteType> = [
  // { title: 'test', description: 'test2', date: 'test3' },
  // { title: 'test', description: 'test2', date: 'test3' },
  // { title: 'test', description: 'test2', date: 'test3' },
  // { title: 'test', description: 'test2', date: 'test3' },
];

export const NotesReducer = createReducer(
  notes,
  on(setNotes, (state, payload) => {
    return {
      ...state,
      notes: payload,
    };
  })
);
