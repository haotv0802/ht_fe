import {Injectable} from "@angular/core";
import {Constants} from "../../common/constant";
import {HTTPService} from "../../common/HTTP.service";
import {Image} from "./image";

@Injectable()
export class ImagesUpdateService {

  image: Image;

  constructor(
    private _httpService: HTTPService,
    private _constants: Constants) {
  }

}
