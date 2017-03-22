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
var NavComponent = (function () {
    // public authority: string;
    function NavComponent(_router) {
        this._router = _router;
        // this.authority = sessionStorage.getItem("authority");
        // console.log("Authority: " + this.authority);
    }
    NavComponent.prototype.authority = function () {
        // console.log("nav - get session storage: " + sessionStorage.getItem("authority"));
        return sessionStorage.getItem("authority");
    };
    NavComponent.prototype.logout = function () {
        sessionStorage.setItem("authority", null);
        sessionStorage.setItem("authToken", null);
        this._router.navigate(["welcome"]);
    };
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        selector: 'app-nav',
        templateUrl: 'app/nav.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map