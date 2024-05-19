import { Component, EventEmitter, Input, Output } from '@angular/core';

interface TitleDataType {
  title: string;
}
@Component({
  selector: 'notebook-ng-input',
  templateUrl: './ng-input.component.html',
  styleUrls: ['./ng-input.component.scss'],
})
export class NgInputComponent {
  inputValue: string = '';

  @Input() labelText: string = '';
  @Input() error: string = '';
  @Output() inputEmit: EventEmitter<TitleDataType> =
    new EventEmitter<TitleDataType>();

  onChangeInputHandler() {
    const titleData = {
      title: this.inputValue,
    };
    this.inputEmit.emit(titleData);
  }
}
