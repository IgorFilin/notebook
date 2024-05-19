import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { exitAction } from 'src/store/auth/auth.actions';
import { getIsAuth } from 'src/store/auth/auth.selector';

@Component({
  selector: 'notebook-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  store = inject(Store);
  isAuth = this.store.select(getIsAuth);

  onClickLeaveHandler() {
    this.store.dispatch(exitAction());
  }
}
