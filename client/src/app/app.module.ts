import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { NotesReducer } from 'src/store/note/note.reducer';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FeaturesModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot({ notes: NotesReducer }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
