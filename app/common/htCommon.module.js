"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var alert_component_1 = require("../common/modal/alert.component");
var open_component_1 = require("../common/modal/open.component");
var modal_component_1 = require("./modal/modal.component");
var HTCommonModule = (function () {
    function HTCommonModule() {
    }
    return HTCommonModule;
}());
HTCommonModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [
            alert_component_1.AlertComponent,
            open_component_1.OpenDirective,
            modal_component_1.ModalComponent
        ],
        exports: [
            alert_component_1.AlertComponent,
            open_component_1.OpenDirective,
            modal_component_1.ModalComponent
        ],
        providers: []
    })
], HTCommonModule);
exports.HTCommonModule = HTCommonModule;
//# sourceMappingURL=htCommon.module.js.map