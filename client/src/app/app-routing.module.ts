import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './features/note/note.component';
import { TestComponent } from './features/test/test.component';

const routes: Routes = [
  { path: '', component: NoteComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
