import {Injectable} from '@angular/core';

@Injectable()
export class Constants {

  private _host = 'http://localhost:8880/ht-be/svc';
  public LOGIN_SERVICE_URL: string = this._host + '/login';

  // Services URLs for Admin
  public ADMIN_USERS_SERVICE_URL: string = this._host + '/admin/users';
  public ADMIN_ROOMS_ROOM_TYPES_SERVICE_URL: string = this._host + '/admin/rooms/roomTypes';
  public ADMIN_ROOMS_IMAGES_SERVICE_URL: string = this._host + '/admin/images';

  // Services URLs for Staff
  // Services URLs for Customer

  // Constants
  public X_AUTH_TOKEN_HEADER: string = "X-AUTH-TOKEN";
  public AUTH_TOKEN: string = "AUTH_TOKEN";
  public AUTHORITY: string = "AUTHORITY";

  // Names of Components
  public WELCOME_URL: string = 'welcome';


}