import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {CalendarComponent} from './calendar/calendar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EventRegisterComponent} from './events/event-register.component';
import {EventService} from './services/event.service';
import {HelloComponent} from './hello';
import {LoginComponent} from './login/login.component';
import {PageHeaderComponent} from './page-header/page-header.component';
import {SignUpComponent} from './login/signup.component';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    CalendarComponent,
    DashboardComponent,
    EventRegisterComponent,
    HelloComponent,
    LoginComponent,
    PageHeaderComponent,
    RootComponent,
    SignUpComponent,
  ],
  providers: [EventService],
  bootstrap: [RootComponent]
})
export class AppModule {
}

