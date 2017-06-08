import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {Credential} from "./credential";
import {Router} from '@angular/router';
import {Constants} from './../constant';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToasterService} from "angular2-toaster";
import {MessagesService} from "../messages/messages.service";

@Component({
  templateUrl: 'app/common/login/login.component.html'
})
export class LoginComponent implements OnInit {

  public pageTitle: string = "Login";
  private _authToken: string;
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private _router: Router,
    private _constants: Constants,
    private fb: FormBuilder,
    private _toasterService: ToasterService,
    private _messagesService: MessagesService
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['admin', [Validators.required]],
      password: ['admin', [Validators.required]]
    });
  }

  login() {
    // this._toasterService.pop('error', 'Args Title', 'Args Body');
    console.log(this.loginForm.value);
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
          this._messagesService.getMessages();
          this._router.navigate(['welcome']);
        }
      },
      (error: any) => {
        console.log(error);
        if (error.status == this._constants.HTTP_STATUS_UNAUTHORIZED) {
          this._toasterService.pop('error', 'Username or Password is incorrect!');
        }
        // this._router.navigate(['welcome']);
      }
    );
  }
}