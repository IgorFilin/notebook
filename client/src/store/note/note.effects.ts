import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createNote, getNotes, setNote, setNotes } from './note.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class NoteEffect {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getNotes = createEffect(() =>
    this.actions$.pipe(
      ofType(getNotes),
      exhaustMap(() => {
        return this.http.get(`${environment.apiBaseUrl}/note/getNotes`).pipe(
          map((data: any) => {
            return setNotes(data);
          }),
          catchError((error) => {
            return 'error';
          })
        );
      })
    )
  );

  createNote = createEffect(() =>
    this.actions$.pipe(
      ofType(createNote),
      exhaustMap((actionData) => {
        return this.http
          .post(
            `${environment.apiBaseUrl}/note/createNote`,
            {
              title: actionData.title,
              description: actionData.description,
            },
            { withCredentials: true }
          )
          .pipe(
            map((data: any) => {
              return setNote(data);
            }),
            catchError((error) => {
              return 'error';
            })
          );
      })
    )
  );
}
