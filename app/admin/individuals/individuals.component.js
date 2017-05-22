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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var individuals_service_1 = require("./individuals.service");
var individualDetails_service_1 = require("./individualDetails.service");
var router_1 = require("@angular/router");
var individualUpdate_service_1 = require("./individualUpdate.service");
var pagination_1 = require("../../common/pagination");
var Rx_1 = require("rxjs/Rx");
var platform_browser_1 = require("@angular/platform-browser");
var IndividualsComponent = (function () {
    function IndividualsComponent(_individualService, _individualDetailsService, _individualUpdateService, _router, document) {
        this._individualService = _individualService;
        this._individualDetailsService = _individualDetailsService;
        this._individualUpdateService = _individualUpdateService;
        this._router = _router;
        this.document = document;
        this.isShown = true;
        this.pageTitle = 'Individual List';
    }
    IndividualsComponent.prototype.ngOnInit = function () {
        this.getIndividuals(0);
        this.getAllIndividuals();
    };
    IndividualsComponent.prototype.getAllIndividuals = function () {
        var _this = this;
        var timer = Rx_1.Observable.timer(5000, 5000);
        // subscribing to a observable returns a subscription object
        timer.subscribe(function () {
            _this._individualService.getIndividuals().subscribe(function (individuals) {
                _this.individualsALL = individuals;
                _this.isShown = false;
            }, function (error) {
                console.log(error);
            });
        });
    };
    // @HostListener("window:scroll", [])
    // onWindowScroll() {
    //   let number = this.document.body.scrollTop;
    //   console.log("number: " + number);
    // }
    IndividualsComponent.prototype.getIndividuals = function (pageNum) {
        var _this = this;
        Rx_1.Observable.forkJoin(this._individualService.getIndividualsCount(), this._individualService.getIndividualsWithPaging(pageNum)).subscribe(function (data) {
            _this.individualsCount = data[0];
            _this.individuals = data[1].content;
            _this.pagination = new pagination_1.Pagination(data[1], _this.individualsCount);
        }, function (error) {
            console.log(error);
        });
        return false;
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
    IndividualsComponent.prototype.counter = function (length) {
        return new Array(length);
    };
    IndividualsComponent.prototype.onScroll = function (event) {
        console.log(event);
    };
    return IndividualsComponent;
}());
__decorate([
    core_1.HostListener('scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], IndividualsComponent.prototype, "onScroll", null);
IndividualsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'individuals.component.html',
        styleUrls: ['individual.bubbling.component.css']
    }),
    __param(4, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [individuals_service_1.IndividualsService,
        individualDetails_service_1.IndividualDetailsService,
        individualUpdate_service_1.IndividualUpdateService,
        router_1.Router,
        Document])
], IndividualsComponent);
exports.IndividualsComponent = IndividualsComponent;
//# sourceMappingURL=individuals.component.js.map