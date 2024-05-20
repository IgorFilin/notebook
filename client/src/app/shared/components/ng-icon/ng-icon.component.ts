import { Component, Input } from '@angular/core';

@Component({
  selector: 'notebook-ng-icon',
  templateUrl: './ng-icon.component.html',
  styleUrls: ['./ng-icon.component.scss'],
})
export class NgIconComponent {
  @Input() color: string = '';
  @Input() id: string = '';
}
