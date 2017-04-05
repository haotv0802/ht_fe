import {Component, OnInit} from "@angular/core";
import {Individual} from "./individual";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import {IndividualAddService} from "./individualAdd.service";
import {DomainService} from "../common/domain.service";

@Component({
  moduleId: module.id,
  templateUrl: 'individualAdd.component.html',
  styleUrls: ['individualAdd.component.css']
})
export class IndividualAddComponent implements OnInit {
  pageTitle: string;
  individual: Individual;
  individualForm: FormGroup;
  emailMessage: string;
  roles: string[];

  constructor(
    private _individualAddService: IndividualAddService,
    private _domainService: DomainService,
    private _router: Router,
    private fb: FormBuilder
  ) {
    this.pageTitle = 'Individual Creation';
  }

  ngOnInit(): void {
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
  }

  save(): void {
    console.log('Saved: ' + JSON.stringify(this.individualForm.value));
  }

  openCalendar() {
    return false;
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