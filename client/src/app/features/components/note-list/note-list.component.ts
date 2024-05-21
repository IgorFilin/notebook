import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  inject,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  getNotes,
  setIdCurrentNote,
  sortAction,
  startDeleteNote,
} from 'src/store/note/note.actions';
import { getDataNotes } from 'src/store/note/note.selector';

@Component({
  selector: 'notebook-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements AfterViewInit {
  store = inject(Store);
  notes: Observable<any> = this.store.select(getDataNotes);
  isDesSorted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  selectCortedValue: string = '';

  selectOptions: any = [
    { label: 'По дате', value: 'date' },
    { label: 'По имени', value: 'title' },
  ];

  ngAfterViewInit(): void {
    this.store.dispatch(getNotes());
    this.isDesSorted.subscribe((isDesSorted) => {
      this.watchIsDesorted(isDesSorted);
    });
  }

  watchIsDesorted(isDesSorted: boolean) {
    this.store.dispatch(
      sortAction({ des: isDesSorted, select: this.selectCortedValue })
    );
  }

  deleteItem(id: string) {
    this.store.dispatch(startDeleteNote({ id }));
  }

  openNote(id: string) {
    this.store.dispatch(setIdCurrentNote({ id }));
  }

  onSelected(value: any) {
    this.selectCortedValue = value;
  }

  onSortedMode() {
    this.isDesSorted.next(!this.isDesSorted.value);
  }
}
