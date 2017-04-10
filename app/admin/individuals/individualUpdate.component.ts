import {Component, OnInit, ViewChild} from "@angular/core";
import {Individual} from "./individual";
import {Router} from "@angular/router";
import {IndividualUpdateService} from "./individualUpdate.service";
import {FormBuilder, FormGroup, Validators, AbstractControl, FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import {DomainService} from "../common/domain.service";
import {DialogComponent} from "./modal/dialog.component";
import {DialogAnchorDirective} from "./modal/dialogAnchor.directive";

@Component({
  moduleId: module.id,
  templateUrl: 'individualUpdate.component.html',
  styleUrls: ['individualUpdate.component.css'],
  entryComponents: [DialogComponent]
})
export class IndividualUpdateComponent implements OnInit {
  pageTitle: string;
  individual: Individual;
  individualForm: FormGroup;
  emailMessage: string;
  userNameMessage: string;
  roles: string[];
  isUserNameExisting: boolean = false;
  visible: boolean = false;
  @ViewChild(DialogAnchorDirective) dialogAnchor: DialogAnchorDirective;

  constructor(
    private _individualUpdateService: IndividualUpdateService,
    private _domainService: DomainService,
    private _router: Router,
    private fb: FormBuilder
  ) {
    this.pageTitle = 'Individual Update';
  }

  openDialog(): void {
    this.dialogAnchor.createDialog(DialogComponent);
  }

  ngOnInit(): void {
    this.individual = this._individualUpdateService.individual;
    this.individualForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      middleName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required, Validators.minLength(3)]],
      birthday: ['', [Validators.required, Validators.minLength(3)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
        confirmEmail: ['', Validators.required],
      }, {validator: emailMatcher}),
      phoneNumber: ['', [Validators.required, Validators.minLength(3)]],
      userName: ['', [Validators.required, Validators.minLength(3), this.validateUserName.bind(this)]],
      role: ['', [Validators.required, Validators.minLength(3)]]
    });
    let emailControl = this.individualForm.get('emailGroup.email');
    emailControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setErrorMessagesForEmailControl(emailControl));

    let userNameControl = this.individualForm.get('userName');
    userNameControl.valueChanges.subscribe(value => {
        this.setErrorMessagesForUserNameControl(userNameControl)
      }
    );

    this._domainService.getRoles().subscribe(
      (roles) => {
        this.roles = roles;
      },
      (error) => {
        console.log(error);
      }
    );

    this.populateData();
  }

  save(): void {
    console.log('Saved: ' + JSON.stringify(this.individualForm.value));
  }

  populateData(): void {
    this.individualForm.setValue({
      firstName: this.individual.firstName,
      lastName: this.individual.lastName,
      middleName: this.individual.middleName,
      gender: this.individual.gender,
      birthday: this.individual.birthday,
      emailGroup: {email: this.individual.email, confirmEmail: this.individual.email},
      phoneNumber: this.individual.phoneNumber,
      userName: this.individual.userName,
      role: this.individual.role
    });

    this._individualUpdateService.isUserNameExisting(this.individual.userName).subscribe(
      (res) => {
        console.log("res.isUserNameExisting");
        console.log(res.isUserNameExisting);
      }
    );
  }

  setErrorMessagesForUserNameControl(c: AbstractControl): void {
    console.log(c.errors);
    this.userNameMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.userNameMessage = Object.keys(c.errors).map(key =>
        this.userNameMessages[key]).join(' ');
    }
  }
  private userNameMessages = {
    required: 'Please enter your user name.',
    minlength: 'The username must be longer than 3 characters.',
    existing: 'User Name is existing already.'
  };

  setErrorMessagesForEmailControl(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(key =>
        this.emailMessages[key]).join(' ');
    }
  }

  private emailMessages = {
    required: 'Please enter your email address.',
    pattern: 'Please enter a valid email address.'
  };

  backIndividualList() {
    this._router.navigate(["admin/individuals"]);
    return false;
  }

  addIndividual() {
    this._router.navigate(["admin/individuals/add"]);
    return false;
  }

  onKey(event: any) {
    // console.log(event.target.value);
    // this._individualUpdateService.isUserNameExisting(event.target.value).subscribe(
    //   (res) => {
    //     console.log("res.isUserNameExisting");
    //     console.log(res.isUserNameExisting);
    //     this.isUserNameExisting = res.isUserNameExisting;
    //   }
    // );
    console.log("userNameMessage: " + this.userNameMessage);
  }

  validateUserName(control : FormControl) : {[key: string]: any} {
    if (!control.value) {
      return null;
    }
    return new Promise(resolve => {
      console.log(control.value);
      if (control.value == "hao") {
        console.log("existing");
        resolve ({'existing': true});
      } else {
        console.log("NOT existing");
        resolve (null);
      }
    });


    // return this._individualUpdateService.isUserNameExisting(control.value).subscribe(
    //   (res) => {
    //     if (res.isUserNameExisting) {
    //       console.log("existing");
    //       return {'existing': true};
    //     } else {
    //       console.log("NOT existing");
    //       return null;
    //     }
    //   },
    //   (error) => {
    //     return {'existing': true};
    //   }
    // );

    // if (!control.value) {
    //   return null;
    // }

    // console.log(value);
    // let isExisting = false;
    // console.log("at the end of subscribe: " + isExisting);
    // if (isExisting) {
    //   return {'existing': true};
    // } else {
    //   return null;
    // }

  }

}

function emailMatcher(c: AbstractControl): {[key: string]: boolean} | null {
  let emailControl = c.get('email');
  let confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return {'match': true};
}