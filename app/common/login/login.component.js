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
var router_1 = require("@angular/router");
var constant_1 = require("./../constant");
var forms_1 = require("@angular/forms");
var angular2_toaster_1 = require("angular2-toaster");
var LoginComponent = (function () {
    function LoginComponent(loginService, _router, _constants, fb, _toasterService) {
        this.loginService = loginService;
        this._router = _router;
        this._constants = _constants;
        this.fb = fb;
        this._toasterService = _toasterService;
        this.pageTitle = "Login";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['admin', [forms_1.Validators.required]],
            password: ['admin', [forms_1.Validators.required]]
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // this._toasterService.pop('error', 'Args Title', 'Args Body');
        console.log(this.loginForm.value);
        var credential = new credential_1.Credential();
        credential.user = this.loginForm.get("username").value;
        credential.pass = this.loginForm.get("password").value;
        credential.lang = "en";
        this.loginService.login(credential).subscribe(function (res) {
            var authority = res.json()[0].authority;
            sessionStorage.setItem(_this._constants.AUTHORITY, authority);
            var headers = res.headers;
            _this._authToken = headers.get(_this._constants.X_AUTH_TOKEN_HEADER);
            sessionStorage.setItem(_this._constants.AUTH_TOKEN, _this._authToken);
            if (_this._authToken) {
                _this._router.navigate(['welcome']);
            }
        }, function (error) {
            console.log(error);
            if (error.status == _this._constants.HTTP_STATUS_UNAUTHORIZED) {
                _this._toasterService.pop('error', 'Username or Password is incorrect!');
            }
            // this._router.navigate(['welcome']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/common/login/login.component.html'
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        router_1.Router,
        constant_1.Constants,
        forms_1.FormBuilder,
        angular2_toaster_1.ToasterService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map