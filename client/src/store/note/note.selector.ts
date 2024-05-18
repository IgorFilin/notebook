import { createSelector } from '@ngrx/store';
import { NoteType } from './note.reducer';

interface AppStore {
  notes: Array<NoteType>;
}

export const getDataNotes = (state: AppStore) => {
  return state.notes;
};
