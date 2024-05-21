import { Injectable } from '@angular/core';
import { catchError, concatMap, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  complitedDeleteNote,
  createNote,
  getNotes,
  setNote,
  setNotes,
  sortAction,
  startDeleteNote,
} from './note.actions';
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
          concatMap((data: any) => {
            return [setNotes(data), sortAction({ des: false, select: 'data' })];
          }),
          catchError((error) => {
            return of('error');
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
              return of('error');
            })
          );
      })
    )
  );

  deleteNote = createEffect(() =>
    this.actions$.pipe(
      ofType(startDeleteNote),
      exhaustMap((actionData) => {
        return this.http
          .post(
            `${environment.apiBaseUrl}/note/deleteNote`,
            {
              id: actionData.id,
            },
            { withCredentials: true }
          )
          .pipe(
            map((data: any) => {
              return complitedDeleteNote(data);
            }),
            catchError((error) => {
              return of('error');
            })
          );
      })
    )
  );
}
