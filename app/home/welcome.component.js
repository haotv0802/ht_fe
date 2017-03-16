System.register(['angular2/core', './welcome.service'], function(exports_1, context_1) {
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
    var core_1, welcome_service_1;
    var WelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (welcome_service_1_1) {
                welcome_service_1 = welcome_service_1_1;
            }],
        execute: function() {
            WelcomeComponent = (function () {
                function WelcomeComponent(_welcomeService) {
                    this._welcomeService = _welcomeService;
                    this.pageTitle = "Welcome to the Page";
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
                WelcomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/home/welcome.component.html'
                    }), 
                    __metadata('design:paramtypes', [welcome_service_1.WelcomeService])
                ], WelcomeComponent);
                return WelcomeComponent;
            }());
            exports_1("WelcomeComponent", WelcomeComponent);
        }
    }
});
//# sourceMappingURL=welcome.component.js.map