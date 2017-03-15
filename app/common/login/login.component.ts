import { Component } from 'angular2/core';
import { LoginService } from './login.service';
import { Credential } from "./credential";
import { RouteParams, Router } from 'angular2/router';

@Component({
    templateUrl: 'app/common/login/login.component.html'
})
export class LoginComponent {
    public pageTitle: string = "Login";
    private _authToken: string;
    credential: Credential = new Credential();

    constructor(private loginService: LoginService, private _router: Router) {
        if (sessionStorage.getItem("authToken")) {
            this._router.navigate(['Products']);
        }
    }

    login() {
        this.loginService.login(this.credential).subscribe(
            (res) => {
                let headers = res.headers;
                this._authToken = headers.get("X-AUTH-TOKEN");
                sessionStorage.setItem("authToken", this._authToken);
                if (this._authToken) {
                    this._router.navigate(['Products']);
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