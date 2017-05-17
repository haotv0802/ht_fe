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
var individualUpdate_service_1 = require("./individualUpdate.service");
var pagination_1 = require("../../common/pagination");
var IndividualsComponent = (function () {
    function IndividualsComponent(_individualService, _individualDetailsService, _individualUpdateService, _router) {
        this._individualService = _individualService;
        this._individualDetailsService = _individualDetailsService;
        this._individualUpdateService = _individualUpdateService;
        this._router = _router;
        this.pageTitle = 'Individual List';
    }
    IndividualsComponent.prototype.ngOnInit = function () {
        // this.getIndividuals();
        this.getIndividualsWithPaging();
        this.getIndividualsCount();
    };
    IndividualsComponent.prototype.getIndividuals = function () {
        var _this = this;
        this._individualService.getIndividuals().subscribe(function (individuals) {
            _this.individuals = individuals;
        }, function (error) {
            console.log(error);
        });
    };
    IndividualsComponent.prototype.getIndividualsWithPaging = function () {
        var _this = this;
        this._individualService.getIndividualsWithPaging().subscribe(function (slice) {
            _this.individuals = slice.content;
            _this.pagination = new pagination_1.Pagination(slice);
            console.log(_this.pagination);
        }, function (error) {
            console.log(error);
        });
    };
    IndividualsComponent.prototype.getIndividualsCount = function () {
        var _this = this;
        this._individualService.getIndividualsCount().subscribe(function (count) {
            _this.individualsCount = count;
            console.log("this.individualsCount");
            console.log(_this.individualsCount);
        }, function (error) {
            console.log(error);
        });
    };
    IndividualsComponent.prototype.displayIndividual = function (individual) {
        this._individualDetailsService.individual = individual;
        this._router.navigate(["admin/individuals/details"]);
    };
    IndividualsComponent.prototype.editIndividual = function (individual) {
        this._individualUpdateService.individual = individual;
        this._router.navigate(["admin/individuals/update"]);
    };
    IndividualsComponent.prototype.addIndividual = function () {
        this._router.navigate(["admin/individuals/add"]);
        return false;
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
        individualUpdate_service_1.IndividualUpdateService,
        router_1.Router])
], IndividualsComponent);
exports.IndividualsComponent = IndividualsComponent;
//# sourceMappingURL=individuals.component.js.map