"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./home/welcome.component");
// import {LoginService} from './common/login/login.service';
var login_module_1 = require("./common/login/login.module");
/* Feature Modules */
var product_module_1 = require("./products/product.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            // RouterModule.forRoot([
            //   {path: 'login', component: LoginComponent},
            //   {path: '', redirectTo: 'login', pathMatch: 'full'},
            //   {path: '**', redirectTo: 'login', pathMatch: 'full'}
            // ]),
            router_1.RouterModule.forRoot([
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
            ]),
            // RouterModule.forChild([
            //   {path: 'login', component: LoginComponent}
            // ]),
            login_module_1.LoginModule,
            product_module_1.ProductModule
        ],
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map