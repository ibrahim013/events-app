import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot  } from '@angular/router';
import { EventService } from './event.service';

@Injectable()

export class EventRouteActivator implements CanActivate {
constructor(private eventService: EventService, private router: Router){
}

canActivate = (route: ActivatedRouteSnapshot) => {
  const eventExist = !!this.eventService.getSingleEvent(+route.params['id'])
  if(!eventExist)
  this.router.navigate(['/404'])
  return eventExist
  }
}
