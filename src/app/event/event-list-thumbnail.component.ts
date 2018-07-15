import { Component, Input} from '@angular/core';


@Component({
  selector: 'event-list-thumbnail',
  template:`
  <div class = "well hoverwell thumbnail">
      <div>{{event.name}}</div>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{event.price}}</div>
      <div>
        <span>Location: {{event.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event.location.city}}, {{event.location.country}}</span>
    </div>
  </div>
  `
})

export class EventListThumbnail{
@Input() event:any
}
