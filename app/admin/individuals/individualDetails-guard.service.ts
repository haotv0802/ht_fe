import {CanActivate, Router, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {IndividualDetailsService} from "./individualDetails.service";

@Injectable()
export class IndividualDetailsGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _individualDetailsService: IndividualDetailsService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this._individualDetailsService.individual) {
      this._router.navigate(["admin/individuals"]);
      console.log("In Individual Guard, return false");
      return false;
    }
    console.log("In Individual Guard, return true");
    return true;
  }
}