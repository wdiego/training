import { Injectable } from '@angular/core';
import {Promise} from '@angular/promises'

export class EventType {
  constructor(
      id: number,
      name: string,
      color: string
    ){}
}

export class PlannerEvent {
  constructor(
      id: number,
      start_datetime: string,
      end_datetime: string,
      name: string,
      type: EventType = null,
      host: string = null,
      guest_list: string = null,
      location: string = null,
      additional_info: string = null
    ){}
}

export const event_types =  [
    new EventType(1, 'Birthday Party', 'blue'),
    new EventType(1, 'Conference Talk', 'orange'),
    new EventType(1, 'Wedding', 'red'),
];

export const events = [
  //new PlannerEvent(1, 'Mr. Nice', event_types[0])
];

@Injectable()
export class EventService {

    getEvents(): void {}

    getEventsByMonth(month, year) {}

    saveEvent(event: PlannerEvent) {}

    getEventTypes() {
        return event_types;
    }

    getEventById(id): Promise {

    }
}




