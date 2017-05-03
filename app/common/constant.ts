import {Injectable} from '@angular/core';

@Injectable()
export class Constants {

  public HOST = 'http://localhost:8880/ht-be/svc';
  public LOGIN_SERVICE_URL: string = this.HOST + '/login';

  // Services URLs for Admin
  public ADMIN_USERS_SERVICE_URL: string = this.HOST + '/admin/users';
  public ADMIN_ROOMS_ROOM_TYPES_SERVICE_URL: string = this.HOST + '/admin/rooms/roomTypes';
  //  Images (for Admin)
  public ADMIN_IMAGES_SERVICE_URL: string = this.HOST + '/admin/images';
  public ADMIN_IMAGES_BY_ID_SERVICE_URL: string = this.HOST + `/admin/images/`;
  public ADMIN_IMAGE_UPDATE_SERVICE_URL: string = this.HOST + `/admin/images/updateImageInfo`;
  //  Individuals (for Admin)
  public ADMIN_INDIVIDUALS_SERVICE_URL: string = this.HOST + '/admin/individuals';
  public ADMIN_INDIVIDUALS_USERNAME_CHECK_SERVICE_URL: string = this.HOST + '/admin/individuals/isUserNameExisting';
  public ADMIN_ROLES_SERVICE_URL: string = this.HOST + '/admin/roles';


  // Services URLs for Staff
  // Services URLs for Customer

  // Constants
  public X_AUTH_TOKEN_HEADER: string = "X-AUTH-TOKEN";
  public AUTH_TOKEN: string = "AUTH_TOKEN";
  public AUTHORITY: string = "AUTHORITY";

  // Names of Components
  public WELCOME_URL: string = 'welcome';


}