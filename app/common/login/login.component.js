"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import {LoginService} from './login.service';
var credential_1 = require("./credential");
var LoginComponent = (function () {
    function LoginComponent() {
        this.pageTitle = "Login";
        this.credential = new credential_1.Credential();
    }
    // constructor(private loginService: LoginService, private _router: Router) {
    //   if (sessionStorage.getItem("authToken")) {
    //     this._router.navigate(['Products']);
    //   }
    // }
    LoginComponent.prototype.login = function () {
        // this.loginService.login(this.credential).subscribe(
        //   (res) => {
        //     let headers = res.headers;
        //     this._authToken = headers.get("X-AUTH-TOKEN");
        //     sessionStorage.setItem("authToken", this._authToken);
        //     if (this._authToken) {
        //       this._router.navigate(['Products']);
        //     }
        //   },
        //   (error) => {
        //     console.log("Unauthorized:");
        //     console.log(error);
        //     this._router.navigate(['Staff']);
        //   }
        // );
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/common/login/login.component.html'
    })
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map