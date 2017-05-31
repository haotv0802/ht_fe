import {Component, OnInit} from "@angular/core";
import {User} from "./user";
import {UsersUpdateService} from "./usersUpdate.service";

@Component({
  moduleId: module.id,
  templateUrl: 'usersUpdate.component.html'
})
export class UsersUpdateComponent implements OnInit {
  // pageTitle: string;
  users: User[];

  constructor(private _userUpdateService: UsersUpdateService) {
    // this.pageTitle = 'User component';
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this._userUpdateService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
