import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { authAction } from 'src/store/auth/auth.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  store = inject(Store);
  title = 'notebook';
  constructor() {}

  ngOnInit() {
    this.store.dispatch(authAction());
  }
}
