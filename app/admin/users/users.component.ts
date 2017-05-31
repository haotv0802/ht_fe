import {Component, OnInit} from "@angular/core";
import {UsersService} from "./users.service";
import {User} from "./user";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Rx";

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
  loaderOpen: boolean = true;

  constructor(
    private _usersService: UsersService,
    private _router: Router
  ) {
    this.pageTitle = 'User component';
  }

  ngOnInit(): void {let timer = Observable.interval(5000);
    // subscribing to a observable returns a subscription object
    timer.subscribe(
      () => {
        this.getUsers();
      }
    );
  }

  getUsers(): void {
    this._usersService.getUsers().subscribe(
      (users) => {
        this.users = users;
        this.loaderOpen = false;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  editUser(): void {
    this._router.navigate(["admin/usersUpdate"]);
  }
}
