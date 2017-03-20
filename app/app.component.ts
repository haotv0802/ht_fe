import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';
import 'rxjs/Rx'; // Load all features
import { RouteConfig } from 'angular2/router';
import { App2Component } from './app2.component';
import { bootstrap } from 'angular2/platform/browser';

@Component({
    selector: "pm-app",
    // template: `<div><h1>{{pageTitle}}</h1></div>
    //     <pm-products></pm-products>
    // `,
    // directives: [ProductListComponent],
    templateUrl:'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, ProductService]
})
@RouteConfig([
    { path: '/app1/welcome', name: 'Welcome1', component: WelcomeComponent, useAsDefault: true},
    { path: '/app1/products', name: 'Products1', component: ProductListComponent},
    { path: '/app1/products/:id', name: 'ProductDetail1', component: ProductDetailComponent}
])
export class AppComponent {

    pageTitle: string = "ACME Product Management";

    clickProduct() {
        console.log('clicking product at App 1');
        bootstrap(App2Component);
    }
}