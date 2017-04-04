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
var individualDetails_service_1 = require("./individualDetails.service");
var router_1 = require("@angular/router");
var IndividualsComponent = (function () {
    function IndividualsComponent(_individualService, _individualDetailsService, _router) {
        this._individualService = _individualService;
        this._individualDetailsService = _individualDetailsService;
        this._router = _router;
        this.pageTitle = 'Individual List';
    }
    IndividualsComponent.prototype.ngOnInit = function () {
        this.getIndividuals();
    };
    IndividualsComponent.prototype.getIndividuals = function () {
        var _this = this;
        console.log("get individuals");
        this._individualService.getIndividuals().subscribe(function (individuals) {
            console.log("get individuals: ----");
            console.log(individuals);
            _this.individuals = individuals;
        }, function (error) {
            console.log(error);
        });
    };
    IndividualsComponent.prototype.displayIndividual = function (individual) {
        console.log(individual);
        this._individualDetailsService.individual = individual;
        this._router.navigate(["admin/individuals/details"]);
    };
    return IndividualsComponent;
}());
IndividualsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'individuals.component.html'
        // styleUrls: ['app/products/product-list.component.css']
    }),
    __metadata("design:paramtypes", [individuals_service_1.IndividualsService,
        individualDetails_service_1.IndividualDetailsService,
        router_1.Router])
], IndividualsComponent);
exports.IndividualsComponent = IndividualsComponent;
//# sourceMappingURL=individuals.component.js.map