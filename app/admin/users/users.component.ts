import {Component, OnInit} from "@angular/core";
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
  settings = {
    columns: {
      id: {
        title: 'ID',
        // width: '20px',
        filter: true
      },
      name: {
        title: 'NAME',
        // width: '100px',
        editable: true,
        filter: false
      },
      role: {
        title: 'ROLE',
        // width: '100px',
        filter: true
      }
    },
    hideSubHeader: false,
    actions:{
      edit: true
    },
    delete:{
      confirmDelete: true
    },
    pager : {
      display : true,
      perPage: 3
    }
  };

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
  editUser(): void {

  }
}
