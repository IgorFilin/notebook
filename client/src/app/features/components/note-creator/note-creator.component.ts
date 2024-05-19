import { Component } from '@angular/core';

@Component({
  selector: 'notebook-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.scss'],
})
export class NoteCreatorComponent {
  titleValue: string = '';

  setTitle(value: string) {
    this.titleValue = value;
  }
}
