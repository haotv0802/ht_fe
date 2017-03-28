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
        // Services URLs for Admin
        this.ADMIN_USERS_SERVICE_URL = this._host + '/admin/users';
        this.ADMIN_ROOMS_ROOM_TYPES_SERVICE_URL = this._host + '/admin/rooms/roomTypes';
        this.ADMIN_ROOMS_IMAGES_SERVICE_URL = this._host + '/admin/images';
        // Services URLs for Staff
        // Services URLs for Customer
        // Constants
        this.X_AUTH_TOKEN_HEADER = "X-AUTH-TOKEN";
        this.AUTH_TOKEN = "AUTH_TOKEN";
        this.AUTHORITY = "AUTHORITY";
        // Names of Components
        this.WELCOME_URL = 'welcome';
    }
    return Constants;
}());
Constants = __decorate([
    core_1.Injectable()
], Constants);
exports.Constants = Constants;
//# sourceMappingURL=constant.js.map