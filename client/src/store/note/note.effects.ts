import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createNote, getNotes, setNotes } from './note.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// export const GetJsonDataEffect = createEffect(
//   (actions$ = inject(Actions), http = inject(HttpClient)) => {
//     return actions$.pipe(
//       ofType(getDataRequest),
//       exhaustMap(() => {
//         return http
//           .get('https://jsonplaceholder.typicode.com/posts')
//           .pipe(tap((data) => console.log(data)));
//       })
//     );
//   },
//   { functional: true, dispatch: true }
// );
@Injectable()
export class GetNotesEffect {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getNotes = createEffect(() =>
    this.actions$.pipe(
      ofType(getNotes),
      exhaustMap(() => {
        return this.http.get(`${environment.apiBaseUrl}/note/getNotes`).pipe(
          tap((data) => console.log(data)),
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
              return setNotes(data);
            }),
            catchError((error) => {
              return 'error';
            })
          );
      })
    )
  );
}
