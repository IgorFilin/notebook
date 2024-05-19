import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registrationConfirm } from 'src/store/auth/auth.actions';

@Component({
  selector: 'notebook-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent {
  store = inject(Store);

  confirmForm = new FormGroup({
    key: new FormControl('', Validators.required),
  });

  get key(): any {
    return this.confirmForm.get('key');
  }

  onSubmit() {
    this.store.dispatch(registrationConfirm(this.confirmForm.value));
  }
}
