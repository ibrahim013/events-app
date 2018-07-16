import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'event-list-thumbnail',
  template:`
  <div class = "well hoverwell thumbnail">
      <div class="tittle">{{event.name}}</div>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{event.price}}</div>
      <div>
        <span>Location: {{event.location.address}}</span>
        <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
    </div>
  </div>
  `,
  styles:[`
  .thumbnail{min-height: 232px}
  .pad-left{margin-left:0.5rem}
  .tittle{font-size: 2.5rem; color:#ffffff}
  `]
})

export class EventListThumbnail{
  @Input() event:any
}
