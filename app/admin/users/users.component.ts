import {Component, OnInit}  from '@angular/core';
import {Constants} from './../../common/constant';
import {UsersService} from "./users.service";

@Component({
  templateUrl: 'app/admin/users/users.component.html'
  // styleUrls: ['app/products/product-list.component.css']
})
export class UsersComponent implements OnInit {
  pageTitle: string;
  constructor(private _usersService: UsersService) {
    this.pageTitle = 'User component';
  }

  ngOnInit(): void {

  }

  getUsers() {
    this._usersService.getUsers().subscribe(
      (res) => {
        console.log("get users: ----");
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
