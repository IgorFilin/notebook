import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './features/pages/main/main.component';
import { RegistrationComponent } from './features/pages/registration/registration.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'reg', component: RegistrationComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
