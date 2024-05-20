import { createAction } from '@ngrx/store';

export const getNotes = createAction('[Note] Get NoteList');
export const setNote = createAction('[Note] Set Note', (data) => data);
export const setNotes = createAction('[Note] Set NoteList', (data) => data);
export const createNote = createAction('[Note] Create Note', (data) => data);
export const startDeleteNote = createAction(
  '[Note] Start Delete Note',
  (data) => data
);
export const complitedDeleteNote = createAction(
  '[Note] Complited Delete Note',
  (data) => data
);

export const sortAction = createAction('[Note] Sorted', (data) => data);
