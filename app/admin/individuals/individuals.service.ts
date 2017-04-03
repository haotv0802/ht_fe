import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Constants} from "../../common/constant";
import {Individual} from "./individual";
import {HTTPService} from "../../common/HTTP.service";

@Injectable()
export class IndividualsService {

  constructor(
    private _httpService: HTTPService,
    private _constants: Constants) {
  }

  getIndividuals(): Observable<Individual[]> {
    return this._httpService.get(this._constants.ADMIN_INDIVIDUALS_SERVICE_URL)
      .map((res) => {return <Individual[]>res.json()})
      ;
  }

}
