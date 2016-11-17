import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {PageHeaderComponent} from './../page-header/page-header.component';
import {EventService, PlannerEvent} from './../services/event.service';

@Component({
    selector: 'event-register',
    styleUrls: ['./app/events/event-register.component.scss'],
    templateUrl: './app/events/event-register.component.html'
})
export class EventRegisterComponent implements OnInit {
    public submitted: boolean = false;
    public model: PlannerEvent;
    public selectedId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router, 
        private service: EventService
        ) {}

    ngOnInit() { 
        this.route.params.forEach((params: Params) => {
            this.selectedId = +params['id'];
            this.service.getEventById(this.selectedId).then(heroes => this.heroes = heroes);
        });
    }

    onSubmit() {
        this.submitted = true;
    }
}