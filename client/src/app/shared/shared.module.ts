import { NgModule } from '@angular/core';
import { NgButtonComponent } from './components/ng-button/ng-button.component';
import { NgInputComponent } from './components/ng-input/ng-input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgButtonComponent, NgInputComponent],
  imports: [CommonModule],
  exports: [NgButtonComponent, NgInputComponent],
})
export class SharedModule {}
