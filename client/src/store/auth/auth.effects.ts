import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';

import { Store } from '@ngrx/store';
import {
  authAction,
  completedExit,
  completedLogin,
  completedRegistrationAction,
  exitAction,
  registrationConfirm,
  registrationFailure,
  startLoading,
  startLogin,
  startRegistrationAction,
  stopLoading,
} from './auth.actions';
import { ResponseDataRegistrationType } from './types';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/core/services/utils.service';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store,
    private toastr: ToastrService,
    private router: Router,
    private utils: UtilsService
  ) {}

  registration = createEffect(() =>
    this.actions$.pipe(
      ofType(startRegistrationAction),
      tap(() => this.store.dispatch(startLoading())),
      exhaustMap((actionData) => {
        return this.http
          .post(`${environment.apiBaseUrl}/user/registration`, {
            name: actionData.name,
            password: actionData.password,
            email: actionData.email,
          })
          .pipe(
            map((data) => {
              this.store.dispatch(stopLoading());
              this.toastr.success('Вы успешно зарегистрировались');
              this.router.navigate(['/confirm']);
              return completedRegistrationAction(
                data as ResponseDataRegistrationType
              );
            }),
            catchError((error) => {
              const errorMessage = error.error.message[0];
              this.toastr.error(errorMessage);
              this.store.dispatch(stopLoading());
              return of(registrationFailure({ error }));
            })
          );
      })
    )
  );

  confirmRegistration = createEffect(() =>
    this.actions$.pipe(
      ofType(registrationConfirm),
      tap(() => this.store.dispatch(startLoading())),
      exhaustMap((actionData) => {
        const params = new HttpParams().set('key', actionData.key);
        return this.http
          .get(`${environment.apiBaseUrl}/user/confirm`, {
            params,
            withCredentials: true,
          })
          .pipe(
            map((data) => {
              this.store.dispatch(stopLoading());
              this.toastr.success('Доброе пожаловать');
              this.router.navigate(['/']);
              return completedRegistrationAction(
                data as ResponseDataRegistrationType
              );
            }),
            catchError((error) => {
              const errorMessage = error.error.message[0];
              this.toastr.error(errorMessage);
              this.store.dispatch(stopLoading());
              return of(registrationFailure({ error }));
            })
          );
      })
    )
  );

  auth = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction),
      tap(() => this.store.dispatch(startLoading())),
      exhaustMap(() => {
        return this.http
          .get(`${environment.apiBaseUrl}/user/auth`, {
            withCredentials: true,
          })
          .pipe(
            map((data) => {
              this.store.dispatch(stopLoading());
              this.toastr.success('Вы успешно авторизованы');
              this.router.navigate(['/']);
              return completedRegistrationAction(
                data as ResponseDataRegistrationType
              );
            }),
            catchError((error) => {
              // const errorMessage = this.utils.errorStore(error);
              this.store.dispatch(stopLoading());
              return of(registrationFailure({ error }));
            })
          );
      })
    )
  );

  exit = createEffect(() =>
    this.actions$.pipe(
      ofType(exitAction),
      tap(() => this.store.dispatch(startLoading())),
      exhaustMap((actionData) => {
        return this.http
          .get(`${environment.apiBaseUrl}/user/logout`, {
            withCredentials: true,
          })
          .pipe(
            map((data) => {
              this.store.dispatch(stopLoading());
              this.toastr.success('Вы успешно вышли, возращайтесь!');
              this.router.navigate(['/registration']);
              return completedExit(data);
            }),
            catchError((error) => {
              const errorMessage = error.error.message[0];
              this.toastr.error(errorMessage);
              this.store.dispatch(stopLoading());
              return of(registrationFailure({ error }));
            })
          );
      })
    )
  );

  login = createEffect(() =>
    this.actions$.pipe(
      ofType(startLogin),
      tap(() => this.store.dispatch(startLoading())),
      exhaustMap((actionData) => {
        return this.http
          .post(
            `${environment.apiBaseUrl}/user/login`,
            {
              name: actionData.name,
              password: actionData.password,
              email: actionData.email,
            },
            { withCredentials: true }
          )
          .pipe(
            map((data) => {
              this.store.dispatch(stopLoading());
              this.toastr.success('Вы успешно вошли');
              this.router.navigate(['/']);
              return completedLogin(data);
            }),
            catchError((error) => {
              const errorMessage = error.error.message[0];
              this.toastr.error(errorMessage);
              this.store.dispatch(stopLoading());
              return of(registrationFailure({ error }));
            })
          );
      })
    )
  );
}
