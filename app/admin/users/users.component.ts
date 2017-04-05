import {Component, OnInit}  from '@angular/core';
import {Constants} from './../../common/constant';
import {UsersService} from "./users.service";
import {User} from "./user";

@Component({
  moduleId: module.id,
  templateUrl: 'users.component.html'
  // styleUrls: ['app/products/product-list.component.css']
})
export class UsersComponent implements OnInit {
  pageTitle: string;
  users: User[];
  constructor(private _usersService: UsersService) {
    this.pageTitle = 'User component';
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._usersService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
