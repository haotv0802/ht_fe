import {Injectable} from "@angular/core";
import {Constants} from './constant';
import {Observable} from 'rxjs/Observable';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from "@angular/http";

@Injectable()
export class HTTPService {

  constructor(
    private _http: Http,
    private _constants: Constants) {
  }

  public post(url: string, data: any): Observable<Response> {
    let headers = new Headers();
    headers.append("Accept-Language", "en");
    headers.append("Content-Type", "application/json");
    if (url != this._constants.LOGIN_SERVICE_URL) {
      headers.append(this._constants.X_AUTH_TOKEN_HEADER, sessionStorage.getItem(this._constants.AUTH_TOKEN));
    }
    return this._http.post(url, data, {headers: headers})
      // .catch(this.handleError)
      ;
  }

  public patch(url: string, data?: any): Observable<Response> {
    let headers = new Headers();
    headers.append("Accept-Language", "en");
    headers.append("Content-Type", "application/json");
    if (url != this._constants.LOGIN_SERVICE_URL) {
      headers.append(this._constants.X_AUTH_TOKEN_HEADER, sessionStorage.getItem(this._constants.AUTH_TOKEN));
    }
    return this._http.patch(url, data, {headers: headers})
      // .catch(this.handleError)
      ;
  }

  public postImageFile(url: string, data: any): Observable<Response> {
    let headers = new Headers();
    headers.append("Accept-Language", "en");
    // headers.append("Content-Type", "multipart/form-data");
    headers.append('Accept', 'application/json');
    if (url != this._constants.LOGIN_SERVICE_URL) {
      headers.append(this._constants.X_AUTH_TOKEN_HEADER, sessionStorage.getItem(this._constants.AUTH_TOKEN));
    }

    return this._http.post(url, data, {headers: headers})
      // .catch(this.handleError)
      ;
  }

  public get(url: string, params?: URLSearchParams): Observable<Response> {
    let headers = new Headers();
    headers.append("Accept-Language", "en");
    headers.append("Content-Type", "application/json");
    if (url != this._constants.LOGIN_SERVICE_URL) {
      headers.append(this._constants.X_AUTH_TOKEN_HEADER, sessionStorage.getItem(this._constants.AUTH_TOKEN));
    }
    let requestOptions: RequestOptions = new RequestOptions();
    requestOptions.headers = headers;
    requestOptions.params = params;
    return this._http.get(url, requestOptions)
      // .catch(this.handleError)
    ;
  }

  private handleError(error: Response) {
    console.error("Error logged in HTTPService: ");
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}