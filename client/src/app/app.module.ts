import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { NotesReducer } from 'src/store/note/note.reducer';
import { PagesModule } from './features/pages/pages.module';
import { NoteEffect } from 'src/store/note/note.effects';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffect } from 'src/store/auth/auth.effects';
import { AuthReducer } from 'src/store/auth/auth.reducer';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './features/components/header/header.component';
import { AuthGuar } from './core/services/auth.guard';
import { UtilsService } from './core/services/utils.service';
import { NoteComponent } from './features/components/note/note.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NoteComponent],
  imports: [
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ notes: NotesReducer, auth: AuthReducer }),
    EffectsModule.forRoot(NoteEffect, AuthEffect),
  ],
  providers: [AuthGuar, UtilsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
