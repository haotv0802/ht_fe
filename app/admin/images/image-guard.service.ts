import {CanActivate, Router, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {ImagesUpdateService} from "./imagesUpdate.service";

@Injectable()
export class ImageDetailsGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _imageUpdateService: ImagesUpdateService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // Comments for reference
    // console.log("url: " + route.url);              // -> admin,images,update
    // console.log("url: " + route.routeConfig.path); // -> admin/images/update
    if (!this._imageUpdateService.image) {
      this._router.navigate(["admin/images"]);
      return false;
    }
    return true;
  }
}