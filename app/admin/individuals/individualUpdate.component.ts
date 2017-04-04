import {Component, OnInit} from "@angular/core";
import {Individual} from "./individual";
import {IndividualsService} from "./individuals.service";
import {Router} from "@angular/router";
import {IndividualUpdateService} from "./individualUpdate.service";
import {FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';

@Component({
  moduleId: module.id,
  templateUrl: 'individualUpdate.component.html',
  styleUrls: ['individualUpdate.component.css']
})
export class IndividualUpdateComponent implements OnInit {
  pageTitle: string;
  individual: Individual;
  individualForm: FormGroup;
  emailMessage: string;

  constructor(
    private _individualService: IndividualsService,
    private _individualUpdateService: IndividualUpdateService,
    private _router: Router,
    private fb: FormBuilder
  ) {
    this.pageTitle = 'Individual Update';
  }

  ngOnInit(): void {
    this.individual = this._individualUpdateService.individual;
    console.log("In individual Update");
    console.log(this.individual);
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
      userName: ['', [Validators.required, Validators.minLength(3)]],
      roles: ['', [Validators.required, Validators.minLength(3)]]
    });
    let emailControl = this.individualForm.get('emailGroup.email');
    emailControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setMessage(emailControl));
  }

  save(): void {
    console.log('Saved: ' + JSON.stringify(this.individualForm.value));
  }
  openCalendar() {
    this.populateTestData();
    return false;
  }
  populateTestData(): void {
    console.log('test data');
    this.individualForm.setValue({
      firstName: this.individual.firstName,
      lastName: this.individual.lastName,
      middleName: this.individual.middleName,
      gender: this.individual.gender,
      birthday: this.individual.birthday,
      emailGroup: {email: this.individual.email, confirmEmail: this.individual.email},
      phoneNumber: this.individual.phoneNumber,
      userName: this.individual.userName,
      roles: this.individual.roles
    });
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(key =>
        this.validationMessages[key]).join(' ');
    }
  }
  private validationMessages = {
    required: 'Please enter your email address.',
    pattern: 'Please enter a valid email address.'
  };
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