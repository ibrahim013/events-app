import { Routes } from '@angular/router';
import { EventListComponent } from "./event/event-list.componet";
import { EventDetailsComponent } from "./event/event-details/event-details.component";
import { Error404Component } from './errors/404.component';
import { CreateNewEventComponent } from './event/create-event.component';
import { EventRouteActivator } from './event/shared/route-activation-service';

export const appRoutes: Routes = [
{ path:'event/new', component: CreateNewEventComponent },
{ path:'events', component: EventListComponent },
{ path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
{ path: '404', component: Error404Component },
{ path: '', redirectTo: '/events', pathMatch: 'full' },
]
