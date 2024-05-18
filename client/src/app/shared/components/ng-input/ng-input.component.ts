import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
@Component({
  selector: 'notebook-ng-input',
  templateUrl: './ng-input.component.html',
  styleUrls: ['./ng-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgInputComponent {
  inputValue: any;

  @Input() labelText: string = '';
  @Input() error: string = '';
  @Output() inputEmit: EventEmitter<string> = new EventEmitter<string>();

  onChangeInputHandler() {
    this.inputEmit.emit(this.inputValue);
  }
}
