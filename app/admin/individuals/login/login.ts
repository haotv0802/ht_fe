import {Modal} from "../modal/modal";
import {Component} from "@angular/core";

@Component({
  selector: 'login',
  templateUrl: 'demo/app/login/login.html',
  styleUrls: ['demo/app/login/login.css'],
})

export class Login {
  modal: Modal;

  constructor(public _modal: Modal) {
    this.modal = _modal
  }

  close() {
    this.modal.close();
  }

  login(username: string, password: string) {
    let data = {username: username, pasword: password}
    this.modal.close(data);
  }
}
