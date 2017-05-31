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
var usersUpdate_service_1 = require("./usersUpdate.service");
var UsersUpdateComponent = (function () {
    function UsersUpdateComponent(_userUpdateService) {
        this._userUpdateService = _userUpdateService;
        // this.pageTitle = 'User component';
    }
    UsersUpdateComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersUpdateComponent.prototype.getUsers = function () {
        var _this = this;
        this._userUpdateService.getUsers().subscribe(function (users) {
            _this.users = users;
        }, function (error) {
            console.log(error);
        });
    };
    return UsersUpdateComponent;
}());
UsersUpdateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'usersUpdate.component.html'
    }),
    __metadata("design:paramtypes", [usersUpdate_service_1.UsersUpdateService])
], UsersUpdateComponent);
exports.UsersUpdateComponent = UsersUpdateComponent;
//# sourceMappingURL=usersUpdate.component.js.map