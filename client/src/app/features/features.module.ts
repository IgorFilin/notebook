import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoteCreatorComponent } from './note-creator/note-creator.component';
import { NoteListComponent } from './note-list/note-list.component';

@NgModule({
  declarations: [NoteCreatorComponent, NoteListComponent],
  imports: [CommonModule, SharedModule],
  exports: [NoteCreatorComponent, NoteListComponent],
})
export class FeaturesModule {}
