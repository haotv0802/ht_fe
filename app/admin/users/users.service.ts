import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from "./user";
import {Constants} from "../../common/constant";

@Injectable()
export class UsersService {

  constructor(private _http: Http, private _constants: Constants) {

  }

  getUsers(): Observable<User[]> {
    let headers = new Headers();

    headers.append("Accept-Language", "en");
    headers.append("Content-Type", "application/json");
    headers.append(this._constants.X_AUTH_TOKEN_HEADER, sessionStorage.getItem(this._constants.AUTH_TOKEN));

    return this._http.get(this._constants.ADMIN_USERS_SERVICE_URL, {headers: headers})
      .map((res) => { return <User[]> res.json(); })
      .catch(this.handleError)
    ;
  }

  private handleError(error: Response) {
    console.error("Error happned in WelcomeService: ");
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
