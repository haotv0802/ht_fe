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
var image_1 = require("./image");
var constant_1 = require("../../common/constant");
var ImagesUpdateComponent = (function () {
    function ImagesUpdateComponent(_imageUpdateService, _router, fb, _route, _constants) {
        this._imageUpdateService = _imageUpdateService;
        this._router = _router;
        this.fb = fb;
        this._route = _route;
        this._constants = _constants;
        this.pageTitle = 'Image Update';
        // this.getImages();
    }
    ImagesUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageForm = this.fb.group({
            id: [''],
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            // Comments for reference
            // imageURL: [this.image.imageURL],
            // imageURL: new FormControl({value: this.image.imageURL, disabled: true}, Validators.required),
            imageURL: new forms_1.FormControl({ value: '', disabled: true }),
            description: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            imageInfo: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            creationOn: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            imageFile: ['']
        });
        this.sub = this._route.queryParams.subscribe(function (params) {
            var id = +params['id'];
            if (id && id != NaN) {
                _this._imageUpdateService.getImageById(id).subscribe(function (res) {
                    _this._imageUpdateService.image = res;
                    _this.image = res;
                    _this.populateData();
                }, function (error) {
                    console.log(error);
                    _this._router.navigate(["admin/images"]);
                });
            }
            else {
                _this.image = _this._imageUpdateService.image;
                _this.populateData();
            }
        });
    };
    ImagesUpdateComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ImagesUpdateComponent.prototype.populateData = function () {
        this.imageForm.setValue({
            id: this.image.id,
            name: this.image.name,
            imageURL: this.image.imageURL,
            description: this.image.description,
            imageInfo: this.image.imageInfo,
            creationOn: this.image.createdOn,
            imageFile: ''
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
    ImagesUpdateComponent.prototype.fileChangeEvent = function (fileInput) {
        this.imageFile = fileInput.target.files[0];
        console.log(this.imageFile);
    };
    ImagesUpdateComponent.prototype.save = function () {
        var _this = this;
        console.log(this.imageForm.value);
        this._imageUpdateService.updateImage(this.convertToImage());
        if (this.imageFile) {
            var formData = new FormData();
            formData.append('imageFile', this.imageFile, this.imageFile.name);
            this._imageUpdateService.updateImageFile(this.imageForm.get("id").value, formData)
                .subscribe(function (res) {
                console.log('Data Response:');
                console.log(res);
                console.log(res.status);
                if (res.status == _this._constants.HTTP_STATUS_NO_CONTENT) {
                    console.log('NO CONTENT');
                    _this._router.navigate(["admin/images"]);
                }
                else {
                    console.log('NO NONONONO CONTENT');
                    // TODO popup error message here. That's why we don't place "this._router.navigate(["admin/images"]);" in the end.
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            console.log('Image file not set yet.');
            this._router.navigate(["admin/images"]);
        }
    };
    ImagesUpdateComponent.prototype.convertToImage = function () {
        var img = new image_1.Image();
        img.id = this.imageForm.get("id").value;
        img.name = this.imageForm.get("name").value;
        img.imageURL = this.imageForm.get("imageURL").value;
        img.description = this.imageForm.get("description").value;
        img.imageInfo = this.imageForm.get("imageInfo").value;
        return img;
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
        forms_1.FormBuilder,
        router_1.ActivatedRoute,
        constant_1.Constants])
], ImagesUpdateComponent);
exports.ImagesUpdateComponent = ImagesUpdateComponent;
//# sourceMappingURL=imagesUpdate.component.js.map