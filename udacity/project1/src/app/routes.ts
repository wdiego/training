/// <reference path="../../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './login/signup.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EventRegisterComponent} from './events/event-register.component';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'events/new',
    component: EventRegisterComponent
  },
  {
    path: 'events/:id',
    component: EventRegisterComponent
  }
];

export const routing = RouterModule.forRoot(routes);
