import { Component } from 'angular2/core';
import { WelcomeService } from './welcome.service';
import { IRole } from "./role";

@Component({
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = "Welcome to the Page";
    private _authToken: string;
    private _roles: IRole[];

    constructor(private _welcomeService: WelcomeService) {
        // this._welcomeService.login("admin", "admin")
        //     .subscribe((res) => {
        //     // let payload = res.json();
        //     let headers = res.headers;
        //     // console.log("headers: ");
        //     // console.log(headers);
        //     // console.log(headers.get("X-AUTH-TOKEN"));
        //     this._authToken = headers.get("X-AUTH-TOKEN");
        //     // console.log("X-AUTH-TOKEN: " + this._authToken);
        //     this._welcomeService.getRoles(this._authToken)
        //         .subscribe((roles) => {
        //             console.log("response from get Roles: ");
        //             console.log(roles);
        //             this._roles = roles;
        //             console.log(this._roles);
        //             for (let i = 0; i < this._roles.length; i++) {
        //                 console.log(this._roles[i].id);
        //                 console.log(this._roles[i].name);
        //             }
        //         });
        // })
        // ;
        console.log("In Welcome page....");
    }
}