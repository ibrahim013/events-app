import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service'

@Component({
  template: `
  <div class="container">
    <div>
      <h2>Upcoming Events</h2>
    </div>
    <hr/>
    <div class="row">
    <div *ngFor= "let event of events" class="col-md-4">
      <event-list-thumbnail (click)="handleThumbnailClick(event.name)" [event]='event'></event-list-thumbnail>
      </div>
    </div>
  </div>
  `
})

export class EventListComponent implements OnInit{
  events: any[]
  constructor(private eventService: EventService, private toastr: ToastrService){
  }

  ngOnInit(){
    this.events = this.eventService.getEvents()
  }
  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }
}

