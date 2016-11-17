import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import {EventService, PlannerEvent} from './../services/event.service';

@Component({
    selector: 'mp-calendar',
    templateUrl: './app/calendar/calendar.component.html',
    styleUrls: ['./app/calendar/calendar.component.scss']
})
export class CalendarComponent {
    public now: any;
    public selectedMonth: any;
    public selectedYear: any;
    public nextMonth: number;
    public nextYear: number;
    public previousMonth: number;
    public previousYear: number;
    public calWeeks: any = [];
    public calMonthYear: string;
    public eventService: EventService;
    public eventArrowPos: string = '50%';

    //public events: PlannerEvent = [];

    constructor(eventService: EventService) {
        this.eventService = eventService;

        let currentDate = moment();
        this.changeMonth(currentDate.month(), currentDate.year());
    }


    showCalendar() {
        let nrColumns  = 7;
        let nrRows     = 6;
        let dif_before = 0;
        this.calWeeks = [];

        let month = this.selectedMonth;
        let year  = this.selectedYear;

        let dt = moment({'year': year, 'month': month, 'day': 1 });
        this.calMonthYear = dt.format('MMMM YYYY');

        dif_before = dt.day();
        dt.subtract(dif_before, 'days');

        for (let week = 0; week < nrRows; week++) {
            let days = [];
            for (let day = 0; day < nrColumns; day++) {
                days.push({
                    day: dt.format('DD'),
                    weekDay: dt.format('ddd'),
                    date: dt.format(),
                    column: day,
                    events: []
                });
                dt.add(1, 'days');
            }
            this.calWeeks.push({
                days: days,
                row: week,
                showEvents: false
            });
        }

    }

    setNextAndPreviousDates() {
        let dt = moment({'month': this.selectedMonth, 'year': this.selectedYear});
        dt.add(1, 'months');
        this.nextMonth = dt.month();
        this.nextYear  = dt.year();

        dt.subtract(2, 'months');
        this.previousMonth = dt.month();
        this.previousYear = dt.year();
    }

    setDayClasses(date) {
        let dt = moment(date);
        let selectedDate = moment({'year': this.selectedYear, 'month': this.selectedMonth, 'day': 1 });
        let currentDate  = moment();

        let classes =  {
            day: true,
            other: !selectedDate.isSame(dt, 'month'),
            today: currentDate.isSame(dt, 'day')
        };
        return classes;
    }

    changeMonth(newMonth: number, newYear: number) {
        this.selectedMonth = newMonth;
        this.selectedYear  = newYear;
        this.setNextAndPreviousDates();
        this.showCalendar();
    }

    dayClick(date, column, row) {
        this.hideAllDivEvents();

        this.calWeeks[row].showEvents = true;
        let pos = 50;
        switch (column) {
            case 0: pos = 6; break;
            case 1: pos = 20; break;
            case 2: pos = 33; break;
            case 3: pos = 47; break;
            case 4: pos = 60; break;
            case 5: pos = 74; break;
            case 6: pos = 87; break;
        }
        this.eventArrowPos = pos + '%';
    }

    hideAllDivEvents() {
        for (let week of this.calWeeks) {
            week.showEvents = false;
        }
    }

}