import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'notebook-ng-button',
  templateUrl: './ng-button.component.html',
  styleUrls: ['./ng-button.component.scss'],
})
export class NgButtonComponent {
  @Input() buttonText: string = '';
  @Output() clickEmit: EventEmitter<any> = new EventEmitter();

  onClickHandler() {
    this.clickEmit.emit();
  }
}
