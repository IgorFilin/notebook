import { NgModule } from '@angular/core';
import { NgButtonComponent } from './components/ng-button/ng-button.component';
import { NgInputComponent } from './components/ng-input/ng-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgTextareaComponent } from './components/ng-textarea/ng-textarea.component';

@NgModule({
  declarations: [NgButtonComponent, NgInputComponent, NgTextareaComponent],
  imports: [CommonModule, FormsModule],
  exports: [NgButtonComponent, NgInputComponent, NgTextareaComponent],
})
export class SharedModule {}
