import { NgModule } from '@angular/core';
import { NgButtonComponent } from './components/ng-button/ng-button.component';
import { NgInputComponent } from './components/ng-input/ng-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgTextareaComponent } from './components/ng-textarea/ng-textarea.component';
import { NgIconComponent } from './components/ng-icon/ng-icon.component';
import { NgSelectComponent } from './components/ng-select/ng-select.component';

@NgModule({
  declarations: [
    NgButtonComponent,
    NgInputComponent,
    NgTextareaComponent,
    NgIconComponent,
    NgSelectComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    NgButtonComponent,
    NgInputComponent,
    NgTextareaComponent,
    NgIconComponent,
    NgSelectComponent,
  ],
})
export class SharedModule {}
