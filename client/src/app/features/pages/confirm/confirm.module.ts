import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './confirm.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConfirmComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class ConfirmModule {}
