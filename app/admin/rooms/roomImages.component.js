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
var roomImages_service_1 = require("./roomImages.service");
var router_1 = require("@angular/router");
var RoomImagesComponent = (function () {
    function RoomImagesComponent(_route, _roomImagesService) {
        this._route = _route;
        this._roomImagesService = _roomImagesService;
        // initial image index
        this._Index = 0;
        this.pageTitle = 'Room images component';
        // console.log("Images: ");
        // console.log(this._roomImagesService.images);
        this.images = this._roomImagesService.images;
    }
    RoomImagesComponent.prototype.ngOnInit = function () {
        // this.getUsers();
    };
    // if a current image is the same as requested image
    RoomImagesComponent.prototype.isActive = function (index) {
        return this._Index = index;
    };
    ;
    // show prev image
    RoomImagesComponent.prototype.showPrev = function () {
        this._Index = (this._Index > 0) ? --this._Index : this.images.length - 1;
    };
    ;
    // show next image
    RoomImagesComponent.prototype.showNext = function () {
        this._Index = (this._Index < this.images.length - 1) ? ++this._Index : 0;
    };
    ;
    // show a certain image
    RoomImagesComponent.prototype.showPhoto = function (index) {
        this._Index = index;
    };
    ;
    return RoomImagesComponent;
}());
RoomImagesComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/admin/rooms/roomImages.component.html',
        styleUrls: ['app/admin/rooms/roomImages.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, roomImages_service_1.RoomImagesService])
], RoomImagesComponent);
exports.RoomImagesComponent = RoomImagesComponent;
//# sourceMappingURL=roomImages.component.js.map