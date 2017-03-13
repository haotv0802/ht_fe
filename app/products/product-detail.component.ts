import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { IProduct } from './product.ts';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = "Product Detail";
    product: IProduct;
    errorMessage: string;

    constructor (private _routeParams: RouteParams, private _router: Router, private _productService: ProductService) {
        let id = this._routeParams.get('id');
        // this.product = this._productService.getProductById(id);
        // let products: IProduct[];
        // this._productService.getProducts()
        //                     .subscribe(products => this.products = products,
        //                     error => this.errorMessage = <any>error
        //                     );
        // this.product = products[4];
        this.pageTitle += `: ${id}`;
    }

    getProduct(id: number) {
        this._productService.getProduct(id)
            .subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
        console.log('product of ' + id);
        console.log(this.product);
    }

    ngOnInit(): void {
        // if (!this.product) {
            let id = +this._routeParams.get('id');
            this.getProduct(id);
        // }
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }
}