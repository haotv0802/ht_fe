"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DialogComponent = (function () {
    function DialogComponent() {
        this.close = new core_1.EventEmitter();
    }
    DialogComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    return DialogComponent;
}());
DialogComponent = __decorate([
    core_1.Component({
        selector: 'dlg',
        template: "\n    <div class=\"dialog\">\n        <header><div class=\"title\">Dialog box</div><div class=\"exit-button\" (click)=\"onClickedExit()\">x</div></header>\n        <p>Hello, I'm a dialog box!</p>\n    </div>\n    ",
        styles: ["\n        .dialog {\n            width: 250px;\n            position: absolute;\n            border: 1px solid black;\n            border-radius: 5px;\n            overflow: hidden;\n            position: fixed;\n            left: calc(50% - 125px);\n            top: 100px;\n        }\n        .dialog p {\n            text-align: center;\n        }\n        .dialog header {\n            border-bottom: 1px solid black;\n            font-size: 12px;\n            padding: 5px;\n            display: flex;\n        }\n        .dialog header .title {\n            flex-grow: 1;\n            cursor: default;\n        }\n        .dialog header .exit-button {\n            cursor: pointer;\n            padding: 0 5px;\n        }\n    "]
    })
], DialogComponent);
exports.DialogComponent = DialogComponent;
//# sourceMappingURL=dialog.component.js.map