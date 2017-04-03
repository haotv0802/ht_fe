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
var IndividualsComponent = (function () {
    function IndividualsComponent(_individualService) {
        this._individualService = _individualService;
        // this.pageTitle = 'User component';
    }
    IndividualsComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    IndividualsComponent.prototype.getUsers = function () {
        var _this = this;
        console.log("get individualss");
        this._individualService.getIndividuals().subscribe(function (individuals) {
            console.log("get individuals: ----");
            console.log(individuals);
            _this.individuals = individuals;
        }, function (error) {
            console.log(error);
        });
    };
    return IndividualsComponent;
}());
IndividualsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'individuals.component.html'
        // styleUrls: ['app/products/product-list.component.css']
    }),
    __metadata("design:paramtypes", [individuals_service_1.IndividualsService])
], IndividualsComponent);
exports.IndividualsComponent = IndividualsComponent;
//# sourceMappingURL=individuals.component.js.map