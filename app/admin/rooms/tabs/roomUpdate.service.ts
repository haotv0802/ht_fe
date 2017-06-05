import {Injectable} from "@angular/core";
import {HTTPService} from "../../../common/HTTP.service";
import {Constants} from "../../../common/constant";
import {RoomType} from "../roomType";

@Injectable()
export class RoomUpdateService {
  public roomType: RoomType;

  constructor(
    private _httpService: HTTPService,
    private _constants: Constants
  ) {

  }

}
