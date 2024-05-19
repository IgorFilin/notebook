import { Component, EventEmitter, Input, Output } from '@angular/core';

interface DescriptionValueType {
  description: string;
}
@Component({
  selector: 'notebook-ng-textarea',
  templateUrl: './ng-textarea.component.html',
  styleUrls: ['./ng-textarea.component.scss'],
})
export class NgTextareaComponent {
  textareaValue: string = '';

  @Input() class: string = '';
  @Output() textareaEmit: EventEmitter<DescriptionValueType> =
    new EventEmitter<DescriptionValueType>();

  onChangeTextareaHandler() {
    const descriptionData: DescriptionValueType = {
      description: this.textareaValue,
    };
    this.textareaEmit.emit(descriptionData);
  }
}
