import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Constants} from './common/constant';

@Component({
  selector: 'app-nav',
  templateUrl: 'app/nav.component.html'
})
export class NavComponent {

  // public authority: string;

  constructor(private _router: Router, private _constants: Constants) {
    // this.authority = sessionStorage.getItem("authority");
    // console.log("Authority: " + this.authority);
  }

  authority(): string {
    // console.log("nav - get session storage: " + sessionStorage.getItem("authority"));
    return sessionStorage.getItem(this._constants.AUTHORITY);
  }

  logout(): void {
    sessionStorage.setItem(this._constants.AUTHORITY, null);
    sessionStorage.setItem(this._constants.AUTH_TOKEN, null);
    this._router.navigate(["welcome"]);
  }
}
