import {Injectable} from '@angular/core';

@Injectable()
export class Constants {

  private _host = 'http://localhost:8880/ht-be/svc';
  public LOGIN_SERVICE_URL: string = this._host + '/login';
  public ROLE_SERVICE_URL: string = this._host + '/testing';
  public X_AUTH_TOKEN_HEADER: string = "X-AUTH-TOKEN";
  public AUTH_TOKEN: string = "AUTH_TOKEN";
  public AUTHORITY: string = "AUTHORITY";

  // URLs to Components or Pages
  public WELCOME_URL: string = 'welcome';
}