import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './features/pages/main/main.component';
import { RegistrationComponent } from './features/pages/registration/registration.component';
import { ConfirmComponent } from './features/pages/confirm/confirm.component';
import { AuthGuar } from './core/services/auth.guard';
import { LoginComponent } from './features/pages/login/login.component';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuar] },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
