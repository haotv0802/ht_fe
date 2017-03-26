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
var rooms_service_1 = require("./rooms.service");
var roomImages_service_1 = require("./roomImages.service");
var router_1 = require("@angular/router");
var RoomsComponent = (function () {
    function RoomsComponent(_roomService, _roomImagesService, _router) {
        this._roomService = _roomService;
        this._roomImagesService = _roomImagesService;
        this._router = _router;
        this.pageTitle = 'Room component';
        this.getRoomTypes();
    }
    RoomsComponent.prototype.ngOnInit = function () {
        // this.getUsers();
    };
    RoomsComponent.prototype.getRoomTypes = function () {
        var _this = this;
        // console.log("get room Types");
        this._roomService.getRoomTypes().subscribe(function (roomTypes) {
            // console.log("get users: ----");
            // console.log(res);
            _this.roomTypes = roomTypes;
            console.log(_this.roomTypes);
        }, function (error) {
            console.log(error);
        });
    };
    RoomsComponent.prototype.displayImages = function (images) {
        this._roomImagesService.images = images;
        this._router.navigate(['admin/roomImages']);
        return false;
    };
    return RoomsComponent;
}());
RoomsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/admin/rooms/rooms.component.html'
        // styleUrls: ['app/products/product-list.component.css']
    }),
    __metadata("design:paramtypes", [rooms_service_1.RoomsService, roomImages_service_1.RoomImagesService, router_1.Router])
], RoomsComponent);
exports.RoomsComponent = RoomsComponent;
//# sourceMappingURL=rooms.component.js.map