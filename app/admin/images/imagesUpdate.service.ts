import {Injectable} from "@angular/core";
import {Constants} from "../../common/constant";
import {HTTPService} from "../../common/HTTP.service";
import {Image} from "./image";
import {Observable} from "rxjs";

@Injectable()
export class ImagesUpdateService {

  image: Image;

  constructor(
    private _httpService: HTTPService,
    private _constants: Constants) {
  }

  getImageById(id: number): Observable<Image> {
    return this._httpService.get(this._constants.HOST + `/admin/images/${id}`)
      .map(
        (res) => {return <Image>res.json()}
      )
    ;
  }
}
