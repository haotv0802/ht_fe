import { Injectable } from 'angular2/core';
import { Credential } from "./credential";
import { Http, Response } from 'angular2/http';
import { Headers } from "angular2/src/http/headers";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

    private _loginURL = 'http://localhost:8880/ht-be/svc/login';
    private _roleURL = 'http://localhost:8880/ht-be/svc/testing';

    constructor(private _http: Http) {
    }

    displayLoginPage() {

    }

    login(credential: Credential) {
        console.log('perform login');
        console.log(credential.user);
        console.log(credential.pass);
        let headers = new Headers();

        headers.append("Accept-Language", "en");
        headers.append("Content-Type", "application/json");

        return this._http.post(this._loginURL,
            JSON.stringify({ "userName": credential.user, "userPass": credential.pass }), {
            headers : headers
        })
            // .do(data => {console.log("All: login: "); console.log(data)})
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error("Error happned in WelcomeService: ");
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}