import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'notebook-ng-select',
  templateUrl: './ng-select.component.html',
  styleUrls: ['./ng-select.component.scss'],
})
export class NgSelectComponent implements OnInit {
  @Input() options: { value: any; label: string }[] = [];
  @Output() selectedOption = new EventEmitter<any>();

  ngOnInit() {
    console.log(this.options[0].value);
    this.selectedOption.emit(this.options[0].value);
  }

  onChangeSelect(event: any) {
    this.selectedOption.emit(event.target.value);
  }
}
