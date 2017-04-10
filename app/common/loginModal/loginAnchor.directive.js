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
var loginModal_service_1 = require("./loginModal.service");
var router_1 = require("@angular/router");
var constant_1 = require("../constant");
var forms_1 = require("@angular/forms");
var LoginAnchorDirective = (function () {
    function LoginAnchorDirective(viewContainer, componentFactoryResolver, loginService, _router, _constants, fb) {
        this.viewContainer = viewContainer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.loginService = loginService;
        this._router = _router;
        this._constants = _constants;
        this.fb = fb;
    }
    LoginAnchorDirective.prototype.createDialog = function (dialogComponent) {
        this.viewContainer.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(dialogComponent);
        var dialogComponentRef = this.viewContainer.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
        return dialogComponentRef;
    };
    return LoginAnchorDirective;
}());
LoginAnchorDirective = __decorate([
    core_1.Directive({
        selector: '[loginAnchor]'
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef,
        core_1.ComponentFactoryResolver,
        loginModal_service_1.LoginModalService,
        router_1.Router,
        constant_1.Constants,
        forms_1.FormBuilder])
], LoginAnchorDirective);
exports.LoginAnchorDirective = LoginAnchorDirective;
//# sourceMappingURL=loginAnchor.directive.js.map