import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { NoteCreatorComponent } from '../../components/note-creator/note-creator.component';
import { NoteListComponent } from '../../components/note-list/note-list.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [NoteListComponent, NoteCreatorComponent, MainComponent],
  imports: [CommonModule, SharedModule],
})
export class MainModule {}
