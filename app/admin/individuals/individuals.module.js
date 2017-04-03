"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var individuals_component_1 = require("./individuals.component");
var individuals_service_1 = require("./individuals.service");
var IndividualsModule = (function () {
    function IndividualsModule() {
    }
    return IndividualsModule;
}());
IndividualsModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'admin/individuals', component: individuals_component_1.IndividualsComponent }
            ]),
            common_1.CommonModule
        ],
        declarations: [individuals_component_1.IndividualsComponent],
        providers: [individuals_service_1.IndividualsService]
    })
], IndividualsModule);
exports.IndividualsModule = IndividualsModule;
//# sourceMappingURL=individuals.module.js.map