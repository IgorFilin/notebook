import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteListComponent } from '../../components/note-list/note-list.component';
import { NoteCreatorComponent } from '../../components/note-creator/note-creator.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [NoteCreatorComponent, NoteListComponent],
  imports: [CommonModule, SharedModule],
})
export class MainModule {}
