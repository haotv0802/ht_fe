System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', "angular2/src/http/headers"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, headers_1;
    var WelcomeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (headers_1_1) {
                headers_1 = headers_1_1;
            }],
        execute: function() {
            WelcomeService = (function () {
                function WelcomeService(_http) {
                    this._http = _http;
                    this._loginURL = 'http://localhost:8880/ht-be/svc/login';
                    this._roleURL = 'http://localhost:8880/ht-be/svc/testing';
                }
                WelcomeService.prototype.getRoles = function (authToken) {
                    var headers = new headers_1.Headers();
                    headers.append("Accept-Language", "en");
                    headers.append("Content-Type", "application/json");
                    headers.append("X-AUTH-TOKEN", authToken);
                    return this._http.get(this._roleURL, {
                        headers: headers
                    })
                        .map(function (res) { return res.text(); })
                        .do(function (data) { console.log("get roles data: "); console.log(data); })
                        .catch(this.handleError);
                    ;
                };
                WelcomeService.prototype.login = function (user, pass) {
                    var data = {
                        "userName": user,
                        "userPass": pass
                    };
                    var headers = new headers_1.Headers();
                    headers.append("Accept-Language", "en");
                    headers.append("Content-Type", "application/json");
                    return this._http.post(this._loginURL, JSON.stringify({ "userName": user, "userPass": pass }), {
                        headers: headers
                    })
                        .do(function (data) { console.log("All: login: "); console.log(data); })
                        .catch(this.handleError);
                };
                WelcomeService.prototype.handleError = function (error) {
                    console.error("Error happned in WelcomeService: ");
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                WelcomeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WelcomeService);
                return WelcomeService;
            }());
            exports_1("WelcomeService", WelcomeService);
        }
    }
});
//# sourceMappingURL=welcome.service.js.map