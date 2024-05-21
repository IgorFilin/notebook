import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearCurrentIdNote } from 'src/store/note/note.actions';
import { NoteType } from 'src/store/note/note.reducer';

@Component({
  selector: 'notebook-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input() currentNote: NoteType | undefined;

  constructor(private store: Store) {}

  onMoveToCreatedNote() {
    this.store.dispatch(clearCurrentIdNote());
  }
}
