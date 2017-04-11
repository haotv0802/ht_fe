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
var router_1 = require("@angular/router");
var constant_1 = require("./../constant");
var forms_1 = require("@angular/forms");
var loginModal_service_1 = require("./loginModal.service");
var credential_1 = require("./credential");
var LoginModalComponent = (function () {
    function LoginModalComponent(loginService, _router, _constants, fb) {
        this.loginService = loginService;
        this._router = _router;
        this._constants = _constants;
        this.fb = fb;
    }
    LoginModalComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['admin', [forms_1.Validators.required]],
            password: ['admin', [forms_1.Validators.required]]
        });
    };
    LoginModalComponent.prototype.login = function () {
        var _this = this;
        // console.log(this.loginForm.value);
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
            console.log("Unauthorized:");
            console.log(error);
            _this._router.navigate(['welcome']);
        });
    };
    return LoginModalComponent;
}());
LoginModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'loginModal.component.html'
    }),
    __metadata("design:paramtypes", [loginModal_service_1.LoginModalService,
        router_1.Router,
        constant_1.Constants,
        forms_1.FormBuilder])
], LoginModalComponent);
exports.LoginModalComponent = LoginModalComponent;
//# sourceMappingURL=loginModal.component.js.map