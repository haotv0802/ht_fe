import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';
import 'rxjs/Rx'; // Load all features
import { RouteConfig } from 'angular2/router';

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
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    { path: '/products', name: 'Products', component: ProductListComponent},
    { path: '/products/:id', name: 'ProductDetail', component: ProductDetailComponent}
])
export class AppComponent {

    pageTitle: string = "ACME Product Management";

}