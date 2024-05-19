import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'notebook-ng-textarea',
  templateUrl: './ng-textarea.component.html',
  styleUrls: ['./ng-textarea.component.scss'],
})
export class NgTextareaComponent {
  textareaValue: string = '';

  @Input() class: string = '';
  @Output() textareaEmit: EventEmitter<string> = new EventEmitter<string>();

  onChangeTextareaHandler() {
    this.textareaEmit.emit(this.textareaValue);
  }
}
