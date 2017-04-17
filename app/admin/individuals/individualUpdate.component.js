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
var individualUpdate_service_1 = require("./individualUpdate.service");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime");
var domain_service_1 = require("../common/domain.service");
var modal_component_1 = require("./modal/modal.component");
var login_1 = require("./login/login");
var alert_component_1 = require("./modal/alert.component");
var IndividualUpdateComponent = (function () {
    function IndividualUpdateComponent(_individualUpdateService, _domainService, _router, fb) {
        this._individualUpdateService = _individualUpdateService;
        this._domainService = _domainService;
        this._router = _router;
        this.fb = fb;
        this.isUserNameExisting = false;
        this.userNameMessages = {
            required: 'Please enter your user name.',
            minlength: 'The username must be longer than 3 characters.',
            existing: 'User Name is existing already.'
        };
        this.emailMessages = {
            required: 'Please enter your email address.',
            pattern: 'Please enter a valid email address.'
        };
        this.pageTitle = 'Individual Update';
    }
    IndividualUpdateComponent.prototype.openDialog = function () {
        this.modal.modalTitle = "LOGIN";
        this.modal.modalFooter = false;
        this.modal.modalMessage = true;
        this.modal.message = "Here Login component will load.";
        this.modal.open(login_1.Login);
    };
    IndividualUpdateComponent.prototype.openAlert = function () {
        this.alert.alertFooter = true;
        this.alert.cancelButton = true;
        this.alert.okButton = false;
        this.alert.alertHeader = true;
        this.alert.alertTitle = "A simple Alert modal window";
        this.alert.message = "It is a classic Alert modal with title, body, footer.";
        this.alert.cancelButtonText = "Ok, Got it.";
        this.alert.open();
    };
    IndividualUpdateComponent.prototype.getData = function (data) {
        this.data = data;
    };
    IndividualUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.individual = this._individualUpdateService.individual;
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
            userName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)], [this.validateUserName.bind(this)]],
            role: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]]
        });
        var emailControl = this.individualForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(function (value) {
            return _this.setErrorMessagesForEmailControl(emailControl);
        });
        var userNameControl = this.individualForm.get('userName');
        userNameControl.valueChanges.subscribe(function (value) {
            _this.setErrorMessagesForUserNameControl(userNameControl);
        });
        this._domainService.getRoles().subscribe(function (roles) {
            _this.roles = roles;
        }, function (error) {
            console.log(error);
        });
        this.populateData();
    };
    IndividualUpdateComponent.prototype.setErrorMessagesForUserNameControl = function (c) {
        var _this = this;
        console.log(c.errors);
        this.userNameMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.userNameMessage = Object.keys(c.errors).map(function (key) {
                return _this.userNameMessages[key];
            }).join(' ');
        }
    };
    IndividualUpdateComponent.prototype.save = function () {
        console.log('Saved: ' + JSON.stringify(this.individualForm.value));
    };
    IndividualUpdateComponent.prototype.populateData = function () {
        this.individualForm.setValue({
            firstName: this.individual.firstName,
            lastName: this.individual.lastName,
            middleName: this.individual.middleName,
            gender: this.individual.gender,
            birthday: this.individual.birthday,
            emailGroup: { email: this.individual.email, confirmEmail: this.individual.email },
            phoneNumber: this.individual.phoneNumber,
            userName: this.individual.userName,
            role: this.individual.role
        });
        this.oldUserNameForCheck = this.individual.userName;
    };
    IndividualUpdateComponent.prototype.validateUserName = function (control) {
        var _this = this;
        return new Promise(function (resolve) {
            // resolve({"existing": true});
            if (_this.oldUserNameForCheck != undefined) {
                _this._individualUpdateService.isUserNameExisting(_this.oldUserNameForCheck, control.value).subscribe(function (res) {
                    if (res.isUserNameExisting) {
                        console.log("existing");
                        resolve({ 'existing': true });
                    }
                    else {
                        console.log("NOT existing");
                        resolve(null);
                    }
                }, function (error) {
                    console.log(error);
                });
            }
            else {
                resolve(null);
            }
        });
    };
    IndividualUpdateComponent.prototype.setErrorMessagesForEmailControl = function (c) {
        var _this = this;
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(function (key) {
                return _this.emailMessages[key];
            }).join(' ');
        }
    };
    IndividualUpdateComponent.prototype.backIndividualList = function () {
        this._router.navigate(["admin/individuals"]);
        return false;
    };
    IndividualUpdateComponent.prototype.addIndividual = function () {
        this._router.navigate(["admin/individuals/add"]);
        return false;
    };
    IndividualUpdateComponent.prototype.onKey = function (event) {
        // console.log(event.target.value);
        // this._individualUpdateService.isUserNameExisting(event.target.value).subscribe(
        //   (res) => {
        //     console.log("res.isUserNameExisting");
        //     console.log(res.isUserNameExisting);
        //     this.isUserNameExisting = res.isUserNameExisting;
        //   }
        // );
        // console.log("userNameMessage: " + this.userNameMessage);
        // if (this.individualForm.get('userName').value == "hao") {
        //   this.userNameMessage = "User name is existing";
        // } else {
        //   this.userNameMessage = ""
        // }
    };
    return IndividualUpdateComponent;
}());
__decorate([
    core_1.ViewChild(modal_component_1.ModalComponent),
    __metadata("design:type", modal_component_1.ModalComponent)
], IndividualUpdateComponent.prototype, "modal", void 0);
__decorate([
    core_1.ViewChild(alert_component_1.AlertComponent),
    __metadata("design:type", alert_component_1.AlertComponent)
], IndividualUpdateComponent.prototype, "alert", void 0);
IndividualUpdateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'individualUpdate.component.html',
        styleUrls: ['individualUpdate.component.css']
    }),
    __metadata("design:paramtypes", [individualUpdate_service_1.IndividualUpdateService,
        domain_service_1.DomainService,
        router_1.Router,
        forms_1.FormBuilder])
], IndividualUpdateComponent);
exports.IndividualUpdateComponent = IndividualUpdateComponent;
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
//# sourceMappingURL=individualUpdate.component.js.map