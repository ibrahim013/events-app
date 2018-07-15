import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { EventListComponent } from './event/event-list.componet';
import { EventListThumbnail } from './event/event-list-thumbnail.component';


@NgModule({
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventListThumbnail
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventAppComponent ]
})
export class AppModule { }
