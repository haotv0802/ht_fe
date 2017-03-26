"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rooms_component_1 = require("./rooms.component");
var roomImages_component_1 = require("./roomImages.component");
var rooms_service_1 = require("./rooms.service");
var roomImages_service_1 = require("./roomImages.service");
var common_1 = require("@angular/common");
var RoomsModule = (function () {
    function RoomsModule() {
    }
    return RoomsModule;
}());
RoomsModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'admin/rooms', component: rooms_component_1.RoomsComponent }
            ]),
            router_1.RouterModule.forChild([
                { path: 'admin/roomImages', component: roomImages_component_1.RoomImagesComponent }
            ]),
            common_1.CommonModule
        ],
        declarations: [rooms_component_1.RoomsComponent, roomImages_component_1.RoomImagesComponent],
        providers: [rooms_service_1.RoomsService, roomImages_service_1.RoomImagesService]
    })
], RoomsModule);
exports.RoomsModule = RoomsModule;
//# sourceMappingURL=rooms.module.js.map