import {Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: 'app/nav.component.html'
})
export class NavComponent {

  // public authority: string;

  constructor() {
    // this.authority = sessionStorage.getItem("authority");
    // console.log("Authority: " + this.authority);
  }
  authority(): string {
    console.log("nav - get session storage: " + sessionStorage.getItem("authority"));
    return sessionStorage.getItem("authority");
  }
}
