import { Injectable, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map, take, tap } from 'rxjs';
import { getIsAuth } from 'src/store/auth/auth.selector';

@Injectable()
export class AuthGuar {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(getIsAuth).pipe(
      take(1), // Берем только одно значение из потока
      map((isAuth) => {
        if (isAuth) {
          return true;
        } else {
          this.router.navigate(['/registration']);
          return false;
        }
      })
    );
  }
}
