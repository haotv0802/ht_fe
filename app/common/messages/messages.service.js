"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var constant_1 = require("../constant");
var HTTP_service_1 = require("../HTTP.service");
var MessagesService = (function () {
    function MessagesService(_constants, _httpService) {
        this._constants = _constants;
        this._httpService = _httpService;
        // console.log("messages");
        // this.getMessages().subscribe(
        //   (res) => {
        //     this.keyValuePairs = res;
        //     // console.log("key value pairs: ");
        //     // console.log(this.keyValuePairs);
        //     // console.log(this.keyValuePairs["admin.roomList.name"]);
        //   },
        //   (error: Error) => {
        //     console.log(error);
        //   }
        // );
    }
    MessagesService.prototype.getMessage = function (key) {
        try {
            return this.keyValuePairs[key];
        }
        catch (err) {
            // console.log(err);
            return "";
        }
        // let result = this.keyValuePairs[key];
        // if (null == result) {
        //   return "";
        // }
        // return result;
    };
    MessagesService.prototype.getMessages = function () {
        var _this = this;
        this._httpService.get(this._constants.ADMIN_MESSAGES_SERVICE_URL)
            .map(function (res) {
            // console.log(res.json());
            return res.json();
        })
            .subscribe(function (res) {
            _this.keyValuePairs = res;
            // console.log("key value pairs: ");
            // console.log(this.keyValuePairs);
            // console.log(this.keyValuePairs["admin.roomList.name"]);
        }, function (error) {
            console.log(error);
        });
        ;
    };
    return MessagesService;
}());
MessagesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [constant_1.Constants,
        HTTP_service_1.HTTPService])
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map