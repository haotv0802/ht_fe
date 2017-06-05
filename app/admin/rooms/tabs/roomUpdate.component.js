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
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime");
var roomUpdate_service_1 = require("./roomUpdate.service");
var RoomUpdateComponent = (function () {
    function RoomUpdateComponent(_router, fb, _roomUpdateService) {
        this._router = _router;
        this.fb = fb;
        this._roomUpdateService = _roomUpdateService;
        this.pageTitle = 'Individual Update';
    }
    RoomUpdateComponent.prototype.ngOnInit = function () {
        this.roomType = this._roomUpdateService.roomType;
        console.log(this.roomType);
        this.roomForm = this.fb.group({
            roomName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            numOfPeople: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            numOfBeds: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            typeOfBeds: ['', [forms_1.Validators.required, forms_1.Validators.minLength(20)]]
        });
        this.populateData();
    };
    RoomUpdateComponent.prototype.populateData = function () {
        this.roomForm.patchValue({
            roomName: this.roomType.name,
            numOfPeople: this.roomType.numOfPeople,
            numOfBeds: this.roomType.numOfBeds
        });
    };
    RoomUpdateComponent.prototype.counter = function (length) {
        return new Array(length);
    };
    return RoomUpdateComponent;
}());
RoomUpdateComponent = __decorate([
    core_1.Component({
        selector: 'room-update',
        moduleId: module.id,
        templateUrl: 'roomUpdate.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder,
        roomUpdate_service_1.RoomUpdateService])
], RoomUpdateComponent);
exports.RoomUpdateComponent = RoomUpdateComponent;
//# sourceMappingURL=roomUpdate.component.js.map