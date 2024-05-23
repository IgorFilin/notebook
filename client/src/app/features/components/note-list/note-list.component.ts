import {
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription, take } from 'rxjs';
import {
  getNotes,
  setIdCurrentNote,
  setNotes,
  sortAction,
  startDeleteNote,
} from 'src/store/note/note.actions';
import { getDataNotes } from 'src/store/note/note.selector';

@Component({
  selector: 'notebook-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements AfterViewInit, OnInit, OnDestroy {
  store = inject(Store);
  notes: any = [];
  storeSub: Subscription | undefined;
  isDesSorted: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  selectCortedValue: string = '';

  selectOptions: any = [
    { label: 'По дате', value: 'date' },
    { label: 'По имени', value: 'title' },
  ];

  ngOnInit() {
    this.storeSub = this.store.select(getDataNotes).subscribe((data) => {
      if (data) {
        localStorage.setItem('notes', JSON.stringify(data));
        this.notes = data;
      }
    });

    window.addEventListener('storage', this.handleStorageChange.bind(this));
  }

  ngAfterViewInit(): void {
    this.store.dispatch(getNotes());
    this.isDesSorted.subscribe((isDesSorted) => {
      this.watchIsDesorted(isDesSorted);
    });
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
    window.removeEventListener('storage', this.handleStorageChange);
  }

  handleStorageChange(event: StorageEvent) {
    const dataNotesStorage = JSON.parse(localStorage.getItem('notes')!);
    if (event.key === 'notes' && dataNotesStorage) {
      this.store.dispatch(setNotes({ notes: dataNotesStorage }));
    }
  }

  watchIsDesorted(isDesSorted: boolean) {
    this.store
      .select(getDataNotes)
      .pipe(take(1))
      .subscribe((data) => {
        if (data.length) {
          this.store.dispatch(
            sortAction({ des: isDesSorted, select: this.selectCortedValue })
          );
        }
      });
  }

  deleteItem(id: string) {
    console.log('=+=', id);
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
