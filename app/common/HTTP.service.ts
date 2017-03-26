import {Injectable} from "@angular/core";
import {Constants} from './constant';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, Response} from "@angular/http";

@Injectable()
export class HTTPService {

  constructor(
    private _http: Http,
    private _constants: Constants) {
  }

  public post(url: string, data: any): Observable<any> {
    let headers = new Headers();
    headers.append("Accept-Language", "en");
    headers.append("Content-Type", "application/json");
    if (url != this._constants.LOGIN_SERVICE_URL) {
      headers.append(this._constants.X_AUTH_TOKEN_HEADER, sessionStorage.getItem(this._constants.AUTH_TOKEN));
    }

    return this._http.post(url, data, {headers: headers})
      .catch(this.handleError)
      ;
  }

  public get(url: string): Observable<any> {
    let headers = new Headers();
    headers.append("Accept-Language", "en");
    headers.append("Content-Type", "application/json");
    if (url != this._constants.LOGIN_SERVICE_URL) {
      headers.append(this._constants.X_AUTH_TOKEN_HEADER, sessionStorage.getItem(this._constants.AUTH_TOKEN));
    }

    return this._http.get(url, {headers: headers})
      .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error("Error logged in HTTPService: ");
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}