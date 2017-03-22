import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: 'app/nav.component.html'
})
export class NavComponent {

  // public authority: string;

  constructor(private _router: Router) {
    // this.authority = sessionStorage.getItem("authority");
    // console.log("Authority: " + this.authority);
  }

  authority(): string {
    // console.log("nav - get session storage: " + sessionStorage.getItem("authority"));
    return sessionStorage.getItem("authority");
  }

  logout(): void {
    sessionStorage.setItem("authority", null);
    sessionStorage.setItem("authToken", null);
    this._router.navigate(["welcome"]);
  }
}
