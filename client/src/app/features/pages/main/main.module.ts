import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { NoteCreatorComponent } from '../../components/note-creator/note-creator.component';
import { NoteListComponent } from '../../components/note-list/note-list.component';
import { MainComponent } from './main.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NoteListComponent, NoteCreatorComponent, MainComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
})
export class MainModule {}
