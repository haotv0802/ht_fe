import { Component } from 'angular2/core';
import { ProductListComponent2 } from './products2/product-list.component2';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home2/welcome.component';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';
import 'rxjs/Rx'; // Load all features
import { RouteConfig } from 'angular2/router';
import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './app.component';

@Component({
    selector: "pm-app2",
    // template: `<div><h1>{{pageTitle}}</h1></div>
    //     <pm-products></pm-products>
    // `,
    // directives: [ProductListComponent],
    templateUrl:'app/app2.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, ProductService]
})
@RouteConfig([
    { path: '/app2/welcome', name: 'Welcome2', component: WelcomeComponent, useAsDefault: true},
    { path: '/app2/products', name: 'Products2', component: ProductListComponent2},
])
export class App2Component {

    pageTitle: string = "ACME Product Management 222222222222";

    clickProduct() {
        console.log('clicking product at App 2');
        bootstrap(AppComponent);
    }
}