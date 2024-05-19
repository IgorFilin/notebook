import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { createNote, getNotes } from 'src/store/note/note.actions';

interface ResultDataType {
  title: string;
  description: string;
}

interface ResponseDataValues {
  inputData?: string;
  textareaData?: string;
}
@Component({
  selector: 'notebook-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.scss'],
})
export class NoteCreatorComponent {
  store = inject(Store);

  resultDataValues: ResultDataType = {
    title: '',
    description: '',
  };

  onChangeTitleHandler(title: string) {
    this.resultDataValues.title = title;
  }

  onChangeDescriptionHandler(description: string) {
    this.resultDataValues.description = description;
  }

  onClickCreateNoteHandler() {
    this.store.dispatch(createNote(this.resultDataValues));
  }
}
