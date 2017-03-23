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
var constant_1 = require("../../common/constant");
var RoomsService = (function () {
    function RoomsService(_http, _constants) {
        this._http = _http;
        this._constants = _constants;
    }
    RoomsService.prototype.getRoomTypes = function () {
        var headers = new http_1.Headers();
        headers.append("Accept-Language", "en");
        headers.append("Content-Type", "application/json");
        headers.append(this._constants.X_AUTH_TOKEN_HEADER, sessionStorage.getItem(this._constants.AUTH_TOKEN));
        return this._http.get(this._constants.ADMIN_ROOMS_ROOM_TYPES_SERVICE_URL, { headers: headers })
            .map(function (res) {
            // let roomType = new RoomType();
            // let data = res.json();
            // roomType.name = data[0].name;
            // roomType.imageInfo = data[0].imageInfo;
            // roomType.imageURL = data[0].imageURL;
            // roomType.imageId = data[0].imageId;
            // return roomType;
            return res.json();
        })
            .catch(this.handleError);
    };
    RoomsService.prototype.handleError = function (error) {
        console.error("Error happened in RoomsService: ");
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return RoomsService;
}());
RoomsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, constant_1.Constants])
], RoomsService);
exports.RoomsService = RoomsService;
//# sourceMappingURL=rooms.service.js.map