import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { RegistrationComponent } from './public/registration/registration.component';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { ForgotComponent } from './public/forgot/forgot.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [  LoginComponent,
  HomeComponent,
  RegistrationComponent,
  AboutUsComponent,
  ForgotComponent]
