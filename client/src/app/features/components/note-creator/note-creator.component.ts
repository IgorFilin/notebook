import { Component } from '@angular/core';

interface ResultDataType {
  title?: string;
  description?: string;
}
@Component({
  selector: 'notebook-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.scss'],
})
export class NoteCreatorComponent {
  resultDataValues: ResultDataType = {
    title: '',
    description: '',
  };

  onChangeValuesHandler(resultValue: ResultDataType) {
    this.resultDataValues = {
      ...this.resultDataValues,
      ...resultValue,
    };
  }

  onClickCreateNoteHandler() {
    console.log('click');
  }
}
