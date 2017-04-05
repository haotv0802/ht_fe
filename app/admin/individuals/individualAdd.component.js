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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime");
var individualAdd_service_1 = require("./individualAdd.service");
var domain_service_1 = require("../common/domain.service");
var IndividualAddComponent = (function () {
    function IndividualAddComponent(_individualAddService, _domainService, _router, fb) {
        this._individualAddService = _individualAddService;
        this._domainService = _domainService;
        this._router = _router;
        this.fb = fb;
        this.validationMessages = {
            required: 'Please enter your email address.',
            pattern: 'Please enter a valid email address.'
        };
        this.pageTitle = 'Individual Creation';
    }
    IndividualAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.individualForm = this.fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            middleName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            lastName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            gender: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            birthday: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            emailGroup: this.fb.group({
                email: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
                confirmEmail: ['', forms_1.Validators.required],
            }, { validator: emailMatcher }),
            phoneNumber: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            userName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            role: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]]
        });
        var emailControl = this.individualForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(function (value) {
            return _this.setMessage(emailControl);
        });
        this._domainService.getRoles().subscribe(function (roles) {
            _this.roles = roles;
        }, function (error) {
            console.log(error);
        });
    };
    IndividualAddComponent.prototype.save = function () {
        console.log('Saved: ' + JSON.stringify(this.individualForm.value));
    };
    IndividualAddComponent.prototype.openCalendar = function () {
        return false;
    };
    IndividualAddComponent.prototype.setMessage = function (c) {
        var _this = this;
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(function (key) {
                return _this.validationMessages[key];
            }).join(' ');
        }
    };
    IndividualAddComponent.prototype.backIndividualList = function () {
        this._router.navigate(["admin/individuals"]);
        return false;
    };
    return IndividualAddComponent;
}());
IndividualAddComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'individualAdd.component.html',
        styleUrls: ['individualAdd.component.css']
    }),
    __metadata("design:paramtypes", [individualAdd_service_1.IndividualAddService,
        domain_service_1.DomainService,
        router_1.Router,
        forms_1.FormBuilder])
], IndividualAddComponent);
exports.IndividualAddComponent = IndividualAddComponent;
function emailMatcher(c) {
    var emailControl = c.get('email');
    var confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}
//# sourceMappingURL=individualAdd.component.js.map