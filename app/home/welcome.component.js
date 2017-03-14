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
                    var _this = this;
                    this._welcomeService = _welcomeService;
                    this.pageTitle = "Welcome";
                    this._welcomeService.login("admin", "admin")
                        .subscribe(function (res) {
                        // let payload = res.json();
                        var headers = res.headers;
                        // console.log("headers: ");
                        // console.log(headers);
                        // console.log(headers.get("X-AUTH-TOKEN"));
                        _this._authToken = headers.get("X-AUTH-TOKEN");
                        // console.log("X-AUTH-TOKEN: " + this._authToken);
                        _this._welcomeService.getRoles(_this._authToken)
                            .subscribe(function (roles) {
                            console.log("response from get Roles: ");
                            console.log(roles);
                            _this._roles = roles;
                            console.log(_this._roles);
                            for (var i = 0; i < _this._roles.length; i++) {
                                console.log(_this._roles[i].id);
                                console.log(_this._roles[i].name);
                            }
                        });
                    });
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