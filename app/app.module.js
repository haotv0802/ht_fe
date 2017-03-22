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
var staff_component_1 = require("./staff/staff.component");
var nav_component_1 = require("./nav.component");
// import {LoginService} from './common/login/login.service';
var login_module_1 = require("./common/login/login.module");
var logout_module_1 = require("./common/logout/logout.module");
/* Feature Modules */
var product_module_1 = require("./products/product.module");
var constant_1 = require("./common/constant");
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
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            ]),
            router_1.RouterModule.forChild([
                { path: 'staff', component: staff_component_1.StaffComponent }
            ]),
            login_module_1.LoginModule,
            logout_module_1.LogoutModule,
            product_module_1.ProductModule
        ],
        declarations: [
            app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            staff_component_1.StaffComponent,
            nav_component_1.NavComponent
        ],
        providers: [
            constant_1.Constants
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map