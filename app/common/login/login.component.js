"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var credential_1 = require("./credential");
// import {RouteParams, Router} from '@angular/router';
// import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(loginService, _router) {
        this.loginService = loginService;
        this._router = _router;
        this.pageTitle = "Login";
        this.credential = new credential_1.Credential();
        if (sessionStorage.getItem("authToken")) {
            this._router.navigate(['Products']);
        }
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.credential).subscribe(function (res) {
            var headers = res.headers;
            _this._authToken = headers.get("X-AUTH-TOKEN");
            sessionStorage.setItem("authToken", _this._authToken);
            if (_this._authToken) {
                _this._router.navigate(['Products']);
            }
        }, function (error) {
            console.log("Unauthorized:");
            console.log(error);
            _this._router.navigate(['Staff']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/common/login/login.component.html'
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map