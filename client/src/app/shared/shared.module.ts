import { NgModule } from '@angular/core';
import { NgButtonComponent } from './components/ng-button/ng-button.component';
import { NgInputComponent } from './components/ng-input/ng-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgButtonComponent, NgInputComponent],
  imports: [CommonModule, FormsModule],
  exports: [NgButtonComponent, NgInputComponent],
})
export class SharedModule {}
