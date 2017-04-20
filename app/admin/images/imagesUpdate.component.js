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
var imagesUpdate_service_1 = require("./imagesUpdate.service");
var forms_1 = require("@angular/forms");
var ImagesUpdateComponent = (function () {
    function ImagesUpdateComponent(_imagesUpdateService, _router, fb) {
        this._imagesUpdateService = _imagesUpdateService;
        this._router = _router;
        this.fb = fb;
        this.pageTitle = 'Image Update';
        // this.getImages();
    }
    ImagesUpdateComponent.prototype.ngOnInit = function () {
        this.image = this._imagesUpdateService.image;
        this.imageForm = this.fb.group({
            name: [this.image.name, [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            imageURL: [''],
            description: [this.image.description, [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            imageInfo: [this.image.imageInfo, [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            creationDate: [this.image.creationDate, [forms_1.Validators.required, forms_1.Validators.minLength(3)]]
        });
    };
    ImagesUpdateComponent.prototype.backImagesList = function () {
        this._router.navigate(["admin/images"]);
        return false;
    };
    ImagesUpdateComponent.prototype.addImage = function () {
        console.log(this.imageForm);
        return false;
    };
    ImagesUpdateComponent.prototype.save = function () {
        console.log(this.imageForm);
    };
    return ImagesUpdateComponent;
}());
ImagesUpdateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'imagesUpdate.component.html',
        styleUrls: ['images.component.01.css', 'images.component.02.css']
    }),
    __metadata("design:paramtypes", [imagesUpdate_service_1.ImagesUpdateService,
        router_1.Router,
        forms_1.FormBuilder])
], ImagesUpdateComponent);
exports.ImagesUpdateComponent = ImagesUpdateComponent;
//# sourceMappingURL=imagesUpdate.component.js.map