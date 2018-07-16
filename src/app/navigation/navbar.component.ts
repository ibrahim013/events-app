import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: '../navigation/navbar.component.html',
  styles:[`
    .navbar {font-size: 14.9px}
    .container-fluid{padding: 15px}
    #searchForm { margin-right: 100px }
    @media(max-width: 1200px){
      #searchForm{ display:none }
    }
  `
  ]
})

export class NavBarComponent  {

};

