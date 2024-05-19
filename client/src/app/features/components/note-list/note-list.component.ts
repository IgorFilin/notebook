import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getDataNotes } from 'src/store/note/note.selector';

@Component({
  selector: 'notebook-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  store = inject(Store);
  notes: Observable<any> = this.store.select(getDataNotes);
  constructor() {}

  ngOnInit(): void {
    // this.store.subscribe((state) => {
    //   console.log(state);
    // });
    console.log(this.notes);
  }
}
