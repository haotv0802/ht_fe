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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var constant_1 = require("./../constant");
var LoginService = (function () {
    // private _loginURL = 'http://localhost:8880/ht-be/svc/login';
    // private _roleURL = 'http://localhost:8880/ht-be/svc/testing';
    function LoginService(_http, _constants) {
        this._http = _http;
        this._constants = _constants;
    }
    LoginService.prototype.displayLoginPage = function () {
    };
    LoginService.prototype.login = function (credential) {
        console.log('perform login');
        console.log(credential.user);
        console.log(credential.pass);
        var headers = new http_1.Headers();
        headers.append("Accept-Language", "en");
        headers.append("Content-Type", "application/json");
        return this._http.post(this._constants.LOGIN_SERVICE_URL, JSON.stringify({ "userName": credential.user, "userPass": credential.pass }), {
            headers: headers
        })
            .catch(this.handleError);
    };
    LoginService.prototype.handleError = function (error) {
        console.error("Error happned in WelcomeService: ");
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, constant_1.Constants])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map