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
var images_service_1 = require("./images.service");
var router_1 = require("@angular/router");
var ImagesComponent = (function () {
    function ImagesComponent(_imagesService, _router) {
        this._imagesService = _imagesService;
        this._router = _router;
        // this.pageTitle = 'Room component';
        // this.getImages();
    }
    ImagesComponent.prototype.ngOnInit = function () {
        this.getImages();
    };
    ImagesComponent.prototype.getImages = function () {
        var _this = this;
        // console.log("get room Types");
        this._imagesService.getImages().subscribe(function (images) {
            console.log("get images: ----");
            console.log(images);
            _this.images = images;
            // $('.carousel').carousel();
        }, function (error) {
            console.log(error);
        });
    };
    ImagesComponent.prototype.counter = function (length) {
        return new Array(length);
    };
    ImagesComponent.prototype.isActive = function (url) {
        return url === this.images[0].imageURL;
        // return url;
    };
    return ImagesComponent;
}());
ImagesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'images.component.html',
        styleUrls: ['images.component.css']
    }),
    __metadata("design:paramtypes", [images_service_1.ImagesService, router_1.Router])
], ImagesComponent);
exports.ImagesComponent = ImagesComponent;
//# sourceMappingURL=images.component.js.map