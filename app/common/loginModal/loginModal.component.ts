import {Component, OnInit, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {Constants} from './../constant';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginModalService} from "./loginModal.service";
import {Credential} from "./credential";

@Component({
  moduleId: module.id,
  templateUrl: 'loginModal.component.html'
})
export class LoginModalComponent implements OnInit {
  private _authToken: string;
  loginForm: FormGroup;

  constructor(
    private loginService: LoginModalService,
    private _router: Router,
    private _constants: Constants,
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['admin', [Validators.required]],
      password: ['admin', [Validators.required]]
    });
  }

  login() {
    // console.log(this.loginForm.value);
    let credential = new Credential();
    credential.user = this.loginForm.get("username").value;
    credential.pass = this.loginForm.get("password").value;
    credential.lang = "en";
    this.loginService.login(credential).subscribe(
      (res) => {
        let authority = res.json()[0].authority;
        sessionStorage.setItem(this._constants.AUTHORITY, authority);
        let headers = res.headers;
        this._authToken = headers.get(this._constants.X_AUTH_TOKEN_HEADER);
        sessionStorage.setItem(this._constants.AUTH_TOKEN, this._authToken);
        if (this._authToken) {
          this._router.navigate(['welcome']);
        }
      },
      (error) => {
        console.log("Unauthorized:");
        console.log(error);
        this._router.navigate(['welcome']);
      }
    );
  }

  close = new EventEmitter();

  onClickedExit() {
    this.close.emit('event');
  }
}