import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'notebook-ng-input',
  templateUrl: './ng-input.component.html',
  styleUrls: ['./ng-input.component.scss'],
})
export class NgInputComponent {
  inputValue: string = '';

  @Input() labelText: string = '';
  @Input() error: string = '';
  @Output() inputEmit: EventEmitter<string> = new EventEmitter<string>();

  onChangeInputHandler() {
    this.inputEmit.emit(this.inputValue);
  }
}
