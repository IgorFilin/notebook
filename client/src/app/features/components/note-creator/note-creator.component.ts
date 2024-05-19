import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createNote, getNotes } from 'src/store/note/note.actions';

@Component({
  selector: 'notebook-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.scss'],
})
export class NoteCreatorComponent {
  store = inject(Store);
  noteCreatedForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  get title(): any {
    return this.noteCreatedForm.get('title');
  }

  get description(): any {
    return this.noteCreatedForm.get('description');
  }

  onSubmit() {
    this.store.dispatch(createNote(this.noteCreatedForm.value));
    this.noteCreatedForm.reset();
  }
}
