import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { EventAppComponent } from './event-app.component';
import { EventListComponent,
        EventListThumbnail,
        EventDetailsComponent,
        EventService,
        } from './event/index';
import { NavBarComponent } from './navigation/navbar.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { CreateNewEventComponent } from './event/create-event.component';
import { EventRouteActivator } from './event/shared/route-activation-service';


@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventListThumbnail,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component,
    CreateNewEventComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, ToastrService, EventRouteActivator],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
