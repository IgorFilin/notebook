import { createAction } from '@ngrx/store';

export const getNotes = createAction('[Note] Get NoteList');
export const setNote = createAction('[Note] Set Note', (data) => data);
export const setNotes = createAction('[Note] Set NoteList', (data) => data);
export const createNote = createAction('[Note] Create Note', (data) => data);
