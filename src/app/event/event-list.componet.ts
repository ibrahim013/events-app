import { Component } from '@angular/core';

@Component({
  selector: 'event-list',
  template: `
  <div>
    <h2>Upcomming Event</h2>
  </div>
  <hr/>
    <event-list-thumbnail [event]='event1'></event-list-thumbnail>
  `
})

export class EventListComponent{
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '2018/7/02',
    time: '4.00pm',
    price: 520,
    location:{
      address: 'Zaria Road Kano',
      city: 'Lagos',
      country: 'Nigeria'
    }

  }
}

