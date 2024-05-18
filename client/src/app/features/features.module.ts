import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note-list/note-list.component';

@NgModule({
  declarations: [NoteComponent, NoteListComponent],
  imports: [CommonModule, SharedModule],
  exports: [NoteComponent, NoteListComponent],
})
export class FeaturesModule {}
