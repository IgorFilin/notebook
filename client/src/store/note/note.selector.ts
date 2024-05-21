import { NoteState, NoteType } from './note.reducer';

export interface AppStore {
  notes: NoteState;
}

export const getDataNotes = (state: AppStore) => {
  return state.notes.notes;
};

export const getCurrentNote = (state: AppStore): NoteType | undefined => {
  const id = state.notes.currentNote;
  return state.notes.notes.find((note) => note.id === id);
};
