System.register(['angular2/core', './product-filter.pipe', './../shared/star.component', './product.service2', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, product_filter_pipe_1, star_component_1, product_service2_1, router_1;
    var ProductListComponent2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_filter_pipe_1_1) {
                product_filter_pipe_1 = product_filter_pipe_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (product_service2_1_1) {
                product_service2_1 = product_service2_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ProductListComponent2 = (function () {
                function ProductListComponent2(_productService) {
                    this._productService = _productService;
                    this.pageTitle = 'Product List 2222222222';
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.imageState = true;
                    this.listFilter = '';
                }
                ProductListComponent2.prototype.toggleImage = function () {
                    this.imageState = !this.imageState;
                };
                ProductListComponent2.prototype.ngOnInit = function () {
                    var _this = this;
                    // this.products = this._productService.getProducts()
                    this._productService.getProducts()
                        .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
                };
                ProductListComponent2.prototype.onRatingClicked = function (message) {
                    this.pageTitle = 'Product List: ' + message;
                };
                ProductListComponent2 = __decorate([
                    core_1.Component({
                        // selector: 'pm-products',
                        templateUrl: 'app/products/product-list.component.html',
                        styleUrls: ['app/products/product-list.component.css'],
                        pipes: [product_filter_pipe_1.ProductFilterPipe],
                        directives: [star_component_1.StarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [product_service2_1.ProductService2])
                ], ProductListComponent2);
                return ProductListComponent2;
            }());
            exports_1("ProductListComponent2", ProductListComponent2);
        }
    }
});
//# sourceMappingURL=product-list.component2.js.map