///<reference path="../../common/HTTP.service.ts"/>
import {Injectable} from "@angular/core";
import {Constants} from "../../common/constant";
import {HTTPService} from "../../common/HTTP.service";
import {Observable} from "rxjs";
import {Image} from "./image";

@Injectable()
export class ImagesUpdateService {

  image: Image;

  constructor(
    private _httpService: HTTPService,
    private _constants: Constants) {
  }

  getImageById(id: number): Observable<Image> {
    return this._httpService.get(this._constants.HOST + `/admin/images/${id}/info`)
      .map(
        (res) => {return <Image>res.json()}
      )
    ;
  }

  updateImage(image: Image): void {
    this._httpService.post(this._constants.ADMIN_IMAGE_UPDATE_SERVICE_URL, image)
      // .do(data => console.log('All: ' + JSON.stringify(data)))
      .subscribe(
        (res) => {
          // console.log('Data Responsed:');
          // console.log(res);
        },
        (error: Error) => {
          console.log(error);
        }
      )
      ;
  }

  updateImageFile(id: number, imageFile: any): void {
    this._httpService.postImageFile(this._constants.HOST + `/admin/images/${id}/updateImage`, imageFile)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .subscribe(
        (res) => {
          // console.log('Data Response:');
          // console.log(res);
        },
        (error: Error) => {
          console.log(error);
        }
      )
    ;
  }
}
