System.register(['angular2/core', './products2/product-list.component2', './products/product.service', './home/welcome.component', 'angular2/http', 'angular2/router', 'rxjs/Rx', 'angular2/platform/browser', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_list_component2_1, product_service_1, welcome_component_1, http_1, router_1, router_2, browser_1, app_component_1;
    var App2Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_list_component2_1_1) {
                product_list_component2_1 = product_list_component2_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (_1) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            App2Component = (function () {
                function App2Component() {
                    this.pageTitle = "ACME Product Management 222222222222";
                }
                App2Component.prototype.clickProduct = function () {
                    console.log('clicking product at App 2');
                    browser_1.bootstrap(app_component_1.AppComponent);
                };
                App2Component = __decorate([
                    core_1.Component({
                        selector: "pm-app2",
                        // template: `<div><h1>{{pageTitle}}</h1></div>
                        //     <pm-products></pm-products>
                        // `,
                        // directives: [ProductListComponent],
                        templateUrl: 'app/app2.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, product_service_1.ProductService]
                    }),
                    router_2.RouteConfig([
                        { path: '/app2/welcome', name: 'Welcome2', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/app2/products', name: 'Products2', component: product_list_component2_1.ProductListComponent2 },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App2Component);
                return App2Component;
            }());
            exports_1("App2Component", App2Component);
        }
    }
});
//# sourceMappingURL=app2.component.js.map