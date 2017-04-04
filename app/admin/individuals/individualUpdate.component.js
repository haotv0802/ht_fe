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
var individuals_service_1 = require("./individuals.service");
var router_1 = require("@angular/router");
var individualUpdate_service_1 = require("./individualUpdate.service");
var IndividualUpdateComponent = (function () {
    function IndividualUpdateComponent(_individualService, _individualUpdateService, _router) {
        this._individualService = _individualService;
        this._individualUpdateService = _individualUpdateService;
        this._router = _router;
        this.pageTitle = 'Individual Update';
    }
    IndividualUpdateComponent.prototype.ngOnInit = function () {
        this.individual = this._individualUpdateService.individual;
        console.log("In individual Update");
        console.log(this.individual);
    };
    return IndividualUpdateComponent;
}());
IndividualUpdateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'individualUpdate.component.html'
        // styleUrls: ['app/products/product-list.component.css']
    }),
    __metadata("design:paramtypes", [individuals_service_1.IndividualsService,
        individualUpdate_service_1.IndividualUpdateService,
        router_1.Router])
], IndividualUpdateComponent);
exports.IndividualUpdateComponent = IndividualUpdateComponent;
//# sourceMappingURL=individualUpdate.component.js.map