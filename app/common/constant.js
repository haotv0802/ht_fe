"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Constants = (function () {
    function Constants() {
        this._host = 'http://localhost:8880/ht-be/svc';
        this.LOGIN_SERVICE_URL = this._host + '/login';
        this.ROLE_SERVICE_URL = this._host + '/testing';
        this.X_AUTH_TOKEN_HEADER = "X-AUTH-TOKEN";
        this.AUTH_TOKEN = "AUTH_TOKEN";
        this.AUTHORITY = "AUTHORITY";
        // URLs to Components or Pages
        this.WELCOME_URL = 'welcome';
    }
    return Constants;
}());
Constants = __decorate([
    core_1.Injectable()
], Constants);
exports.Constants = Constants;
//# sourceMappingURL=constant.js.map