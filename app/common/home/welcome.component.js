"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var scrollable_1 = require("@ngui/scrollable");
var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.pageTitle = 'Welcome';
        this.id = 's1';
        this.hid = 'h1';
        this.wid = 'w1';
    }
    WelcomeComponent.prototype.scrollTo = function (selector, parentSelector, horizontal) {
        scrollable_1.NguiScrollableDirective.scrollTo(selector, // scroll to this
        parentSelector, // scroll within (null if window scrolling)
        horizontal, // is it horizontal scrolling
        10 // distance from top or left
        );
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/common/home/welcome.component.html',
        styleUrls: ['app/common/home/welcome.component.css']
    })
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map