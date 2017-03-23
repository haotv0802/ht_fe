import {Component, OnInit}  from '@angular/core';
import {Constants} from './../../common/constant';
import {UsersService} from "./users.service";
import {User} from "./user";

@Component({
  templateUrl: 'app/admin/users/users.component.html'
  // styleUrls: ['app/products/product-list.component.css']
})
export class UsersComponent implements OnInit {
  pageTitle: string;
  users: User[];
  constructor(private _usersService: UsersService) {
    this.pageTitle = 'User component';
  }

  ngOnInit(): void {
    // this.getUsers();
  }

  getUsers(): void {
    console.log("get users");
    this._usersService.getUsers().subscribe(
      (users) => {
        // console.log("get users: ----");
        // console.log(res);
        this.users = users;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
