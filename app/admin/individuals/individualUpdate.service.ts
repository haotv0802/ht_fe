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

}
