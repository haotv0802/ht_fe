import {Injectable} from "@angular/core";
import {Constants} from "../../common/constant";
import {HTTPService} from "../../common/HTTP.service";
import {Individual} from "./individual";

@Injectable()
export class IndividualUpdateService {

  public individual: Individual;

  constructor(
    private _httpService: HTTPService,
    private _constants: Constants) {
  }

  isUserNameExisting(username: string) {
    console.log(this._constants.ADMIN_INDIVIDUALS_USERNAME_CHECK_SERVICE_URL + username);
    console.log("username: " + username);
    return this._httpService.get(this._constants.ADMIN_INDIVIDUALS_USERNAME_CHECK_SERVICE_URL + username)
      .map((res) => res.json())
      ;
  }
}
