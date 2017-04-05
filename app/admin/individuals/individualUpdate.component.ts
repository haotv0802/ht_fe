import {Component, OnInit} from "@angular/core";
import {Individual} from "./individual";
import {IndividualsService} from "./individuals.service";
import {Router} from "@angular/router";
import {IndividualUpdateService} from "./individualUpdate.service";
import {FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import {DomainService} from "../common/domain.service";

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
  roles: string[];

  constructor(
    private _individualService: IndividualsService,
    private _individualUpdateService: IndividualUpdateService,
    private _domainService: DomainService,
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
      role: ['', [Validators.required, Validators.minLength(3)]]
    });
    let emailControl = this.individualForm.get('emailGroup.email');
    emailControl.valueChanges.debounceTime(1000).subscribe(value =>
      this.setMessage(emailControl));

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
    )
    ;
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

  backIndividualList() {
    this._router.navigate(["admin/individuals"]);
    return false;
  }

  addIndividual() {
    this._router.navigate(["admin/individuals/add"]);
    return false;
  }

  onKey(event: any) {
    console.log(event.target.value);
    this._individualUpdateService.isUserNameExisting(event.target.value).subscribe(
      (res) => {
        console.log("res.isUserNameExisting");
        console.log(res.isUserNameExisting);
      }
    )
    ;
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