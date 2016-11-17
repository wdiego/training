import { Component, OnInit } from '@angular/core';

import {PageHeaderComponent} from './../page-header/page-header.component';
import {CalendarComponent} from './../calendar/calendar.component';

@Component({
    selector: 'dashboard',
    styleUrls: ['./index.scss', './app/dashboard/dashboard.component.scss'],
    templateUrl: './app/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}