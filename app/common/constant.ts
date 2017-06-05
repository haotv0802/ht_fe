import {Injectable} from '@angular/core';

@Injectable()
export class Constants {

  public HOST = 'http://localhost:8880/ht-be/svc';
  public LOGIN_SERVICE_URL: string = this.HOST + '/login';

  // HTTP Status
  public HTTP_STATUS_OK: number = 200;
  public HTTP_STATUS_NO_CONTENT: number = 204;
  public HTTP_STATUS_BAD_REQUEST: number = 400;
  public HTTP_STATUS_UNAUTHORIZED: number = 401;

  ////      Services URLs for Admin
  //  Users (for Admin)
  public ADMIN_USERS_SERVICE_URL: string = this.HOST + '/admin/users';
  public ADMIN_USERS_ROLES_UPDATE_SERVICE_URL: string = this.HOST + '/admin/users/usersRolesUpdate';

  //  Roles (for Admin)
  public ADMIN_ROLES_SERVICE_URL: string = this.HOST + '/admin/roles';
  public ADMIN_ROLES_KEYVALUE_SERVICE_URL: string = this.HOST + '/admin/roles/keyValuePair';

  //  Rooms
  public ADMIN_ROOMS_ROOM_TYPES_SERVICE_URL: string = this.HOST + '/admin/rooms/roomTypes';
  public ADMIN_ROOMS_ROOM_TYPE_UPDATE_SERVICE_URL: string = this.HOST + '/admin/rooms/roomTypes/update';

  //  Images (for Admin)
  public ADMIN_IMAGES_SERVICE_URL: string = this.HOST + '/admin/images';
  public ADMIN_IMAGE_UPDATE_SERVICE_URL: string = this.HOST + `/admin/images/updateImageInfo`;
  //  Individuals (for Admin)
  public ADMIN_INDIVIDUALS_SERVICE_URL: string = this.HOST + '/admin/individuals';
  public ADMIN_INDIVIDUALS_WITH_PAGING_SERVICE_URL: string = this.HOST + '/admin/individuals/paging';
  public ADMIN_INDIVIDUALS_COUNT_SERVICE_URL: string = this.HOST + '/admin/individuals/count';
  public ADMIN_INDIVIDUALS_USERNAME_CHECK_SERVICE_URL: string = this.HOST + '/admin/individuals/isUserNameExisting';



  // Services URLs for Staff
  // Services URLs for Customer

  // Constants
  public X_AUTH_TOKEN_HEADER: string = "X-AUTH-TOKEN";
  public AUTH_TOKEN: string = "AUTH_TOKEN";
  public AUTHORITY: string = "AUTHORITY";

  // Names of Components
  public WELCOME_URL: string = 'welcome';


}