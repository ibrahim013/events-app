import { Component } from '@angular/core';
import { ToastrService } from '../common/toastr.service';

@Component({
  template: `
  <div class="container">
  <h2>New Event</h2>
  <hr/>
  <p>[A form goes in here]</p>
  <button class="btn btn-primary">Send</button>
  <span> &nbsp; </span>
  <button class="btn btn-warning" (click)="handleCancle('You are about to cancle this transaction')">Cancel</button>
  </div>
  `
})

export class CreateNewEventComponent{
constructor(private toastr: ToastrService){

}
handleCancle = (message) => {
  this.toastr.info(message);
}
}
