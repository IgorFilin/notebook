import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { NotesReducer } from 'src/store/note/note.reducer';
import { PagesModule } from './features/pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ notes: NotesReducer }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
