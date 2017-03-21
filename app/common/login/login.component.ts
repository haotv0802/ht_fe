import {Component} from '@angular/core';
import {LoginService} from './login.service';
import {Credential} from "./credential";
// import {RouteParams, Router} from '@angular/router';
// import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'app/common/login/login.component.html'
})
export class LoginComponent {
  public pageTitle: string = "Login";
  private _authToken: string;
  credential: Credential = new Credential();

  constructor(private loginService: LoginService, private _router: Router) {
    // if (sessionStorage.getItem("authToken")) {
    //   this._router.navigate(['products']);
    // }
  }

  login() {
    this.loginService.login(this.credential).subscribe(
      (res) => {
        // console.log("response");
        // console.log(res);
        // console.log(res.json()[0].authority);
        let authority = res.json()[0].authority;
        sessionStorage.setItem("authority", authority);
        let headers = res.headers;
        this._authToken = headers.get("X-AUTH-TOKEN");
        sessionStorage.setItem("authToken", this._authToken);
        if (this._authToken) {
          this._router.navigate(['products']);
        }
      },
      (error) => {
        console.log("Unauthorized:");
        console.log(error);
        this._router.navigate(['Staff']);
      }
    );
  }
}