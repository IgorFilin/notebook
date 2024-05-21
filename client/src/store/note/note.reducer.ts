import { createReducer, on } from '@ngrx/store';
import {
  clearCurrentIdNote,
  complitedDeleteNote,
  setIdCurrentNote,
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

export interface NoteState {
  currentNote: string | null;
  notes: Array<NoteType>;
}

const notes: NoteState = {
  currentNote: null,
  notes: [],
};

export const NotesReducer = createReducer(
  notes,
  on(setNote, (state, { note }) => {
    return {
      ...state,
      notes: [...state.notes, note],
    };
  }),
  on(setNotes, (state, { notes }) => {
    return {
      ...state,
      notes,
    };
  }),
  on(setIdCurrentNote, (state, { id }) => {
    return {
      ...state,
      currentNote: id,
    };
  }),
  on(complitedDeleteNote, (state, { id }) => {
    return {
      ...state,
      notes: state.notes.filter((note) => note.id !== id),
    };
  }),
  on(clearCurrentIdNote, (state) => {
    return {
      ...state,
      currentNote: null,
    };
  }),

  on(sortAction, (state, data) => {
    console.log('сортировка', data);
    // Функция сортировки для поля date
    const sortByDate = (a: any, b: any) => {
      if (data.des) {
        console.log(1);
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        console.log(2);
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    };

    // Функция сортировки для поля title
    const sortByTitle = (a: any, b: any) => {
      if (data.des) return a.title.localeCompare(b.title);
      else return b.title.localeCompare(a.title);
    };

    // Выбор функции сортировки в зависимости от выбранного поля
    const sortFunction = data.select === 'date' ? sortByDate : sortByTitle;
    console.log(sortFunction);
    // Применение направления сортировки
    return {
      ...state,
      notes: [...state.notes].sort(sortFunction),
    };
  })
);
