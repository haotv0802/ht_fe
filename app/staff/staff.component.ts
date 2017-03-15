import { Component } from 'angular2/core';
// import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './../products/product-detail.component';
import { ProductService } from './../products/product.service';
// import { WelcomeService } from './home/welcome.service';
// import { LoginService } from './common/login/login.service';
// import { WelcomeComponent } from './home/welcome.component';
// import { LoginComponent } from './common/login/login.component';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';
import 'rxjs/Rx'; // Load all features
import { RouteConfig } from 'angular2/router';


@Component({
    templateUrl:'app/staff/staff.component.html',
    directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
//     // { path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true},
//     // { path: '/welcome', name: 'Welcome', component: WelcomeComponent},
    { path: '/products', name: 'Products', component: ProductDetailComponent},
//     // { path: '/products/:id', name: 'ProductDetail', component: ProductDetailComponent}
])
export class StaffComponent {
    public pageTitle: string = "Welcome to Staff";

    constructor() {
    }
}