import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModule } from './main/main.module';
import { RegistrationModule } from './registration/registration.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmModule } from './confirm/confirm.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainModule,
    RegistrationModule,
    ConfirmModule,
    LoginModule,
  ],
})
export class PagesModule {}
