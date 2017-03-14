import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Headers } from "angular2/src/http/headers";
import { IRole } from "./role";

@Injectable()
export class WelcomeService {
    private _loginURL = 'http://localhost:8880/ht-be/svc/login';
    private _roleURL = 'http://localhost:8880/ht-be/svc/testing';

    constructor (private _http: Http) {

    }

    getRoles(authToken: string) {
        let headers = new Headers();

        headers.append("Accept-Language", "en");
        headers.append("Content-Type", "application/json");
        headers.append("X-AUTH-TOKEN", authToken);

        return this._http.get(this._roleURL, {
            headers : headers
        })
            .map((res:Response) => res.text())
            .do(data => {console.log("get roles data: "); console.log(data)})
            .catch(this.handleError);
        ;
    }

    login(user: string, pass: string) {
        let data: any =
            {
                "userName" : user,
                "userPass" : pass
            };
        let headers = new Headers();

        headers.append("Accept-Language", "en");
        headers.append("Content-Type", "application/json");

        return this._http.post(this._loginURL, JSON.stringify({ "userName": user, "userPass": pass }), {
            headers : headers
        })
        //     .subscribe((res) => {
        //     // var payload = res.json();
        //     var headers = res.headers;
        //     console.log("headers: ");
        //     console.log(headers);
        //     console.log(headers.get("X-AUTH-TOKEN"));
        //     this._authToken = headers.get("X-AUTH-TOKEN");
        // })
        // ;
        //     .map((res:Response) => res.json())
            .do(data => {console.log("All: login: "); console.log(data)})
            .catch(this.handleError);

    }

    private handleError(error: Response) {
        console.error("Error happned in WelcomeService: ");
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
