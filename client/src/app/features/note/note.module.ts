import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NoteComponent],
  imports: [CommonModule, SharedModule],
  exports: [NoteComponent],
})
export class NoteModule {}
