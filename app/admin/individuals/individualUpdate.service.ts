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
  return this._httpService.get(this._constants.ADMIN_INDIVIDUALS_USERNAME_CHECK_SERVICE_URL + 'admin')
    .map((res) => res.json())
    ;
}
}
