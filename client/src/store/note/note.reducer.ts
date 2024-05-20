import { createReducer, on } from '@ngrx/store';
import {
  complitedDeleteNote,
  getNotes,
  setNote,
  setNotes,
  sortAction,
} from './note.actions';

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
    return [...state, note];
  }),
  on(setNotes, (state, { notes }) => {
    return [...notes];
  }),
  on(complitedDeleteNote, (state, { id }) => {
    return state.filter((note) => note.id !== id);
  }),
  on(sortAction, (state, data) => {
    // Функция сортировки для поля date
    const sortByDate = (a: any, b: any) => {
      if (data.des)
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      else return new Date(b.date).getTime() - new Date(a.date).getTime();
    };

    // Функция сортировки для поля title
    const sortByTitle = (a: any, b: any) => {
      if (data.des) return a.title.localeCompare(b.title);
      else return b.title.localeCompare(a.title);
    };

    // Выбор функции сортировки в зависимости от выбранного поля
    const sortFunction = data.select === 'date' ? sortByDate : sortByTitle;

    // Применение направления сортировки
    return [...state].sort(sortFunction);
  })
);
