import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore, getCurrentNote } from 'src/store/note/note.selector';
import { NoteType } from 'src/store/note/note.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'notebook-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  currentNote: NoteType | undefined;
  noteObserver: Observable<NoteType | undefined> = new Observable<NoteType>();

  constructor(private store: Store<AppStore>) {}

  ngOnInit() {
    this.noteObserver = this.store.select(getCurrentNote);
    this.noteObserver.subscribe((note) => {
      this.currentNote = note;
    });
  }
}
