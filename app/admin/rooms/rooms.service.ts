import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Constants} from "../../common/constant";
import {RoomType} from "./roomType";

@Injectable()
export class RoomsService {

  constructor(private _http: Http, private _constants: Constants) {
  }

  getRoomTypes(): Observable<RoomType[]> {
    let headers = new Headers();

    headers.append("Accept-Language", "en");
    headers.append("Content-Type", "application/json");
    headers.append(this._constants.X_AUTH_TOKEN_HEADER, sessionStorage.getItem(this._constants.AUTH_TOKEN));

    return this._http.get(this._constants.ADMIN_ROOMS_ROOM_TYPES_SERVICE_URL, {headers: headers})
      .map((res) => {
        // let roomType = new RoomType();
        // let data = res.json();
        // roomType.name = data[0].name;
        // roomType.imageInfo = data[0].imageInfo;
        // roomType.imageURL = data[0].imageURL;
        // roomType.imageId = data[0].imageId;
        // return roomType;
        return <RoomType[]> res.json();
      })
      .catch(this.handleError)
      ;
  }

  private handleError(error: Response) {
    console.error("Error happened in RoomsService: ");
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
