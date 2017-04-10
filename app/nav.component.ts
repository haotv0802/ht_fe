import {Component, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Constants} from './common/constant';
import {LoginModalComponent} from "./common/loginModal/loginModal.component";
import {LoginAnchorDirective} from "./common/loginModal/loginAnchor.directive";

@Component({
  selector: 'ht-nav',
  moduleId: module.id,
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
  entryComponents: [LoginModalComponent]
})
export class NavComponent {

  // public authority: string;
  @ViewChild(LoginAnchorDirective) loginAnchor: LoginAnchorDirective;

  constructor(private _router: Router, private _constants: Constants) {
    // this.authority = sessionStorage.getItem("authority");
    // console.log("Authority: " + this.authority);
  }

  authority(): string {
    // console.log("nav - get session storage: " + sessionStorage.getItem("authority"));
    return sessionStorage.getItem(this._constants.AUTHORITY);
  }

  openDialog(): void {
    this.loginAnchor.createDialog(new LoginModalComponent());
  }

  logout(){
    sessionStorage.setItem(this._constants.AUTHORITY, null);
    sessionStorage.setItem(this._constants.AUTH_TOKEN, null);
    this._router.navigate(["welcome"]);
    return false;
  }
}
