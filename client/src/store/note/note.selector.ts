import { NoteState, NoteType } from './note.reducer';

interface AppStore {
  notes: NoteState;
}

export const getDataNotes = (state: AppStore) => {
  return state.notes.notes;
};
