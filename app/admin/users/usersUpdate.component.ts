import {Component, OnInit} from "@angular/core";
import {User} from "./user";
import {UsersUpdateService} from "./usersUpdate.service";
import {KeyValuePair} from "../../common/keyValuePair";
import {Observable} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  templateUrl: 'usersUpdate.component.html'
})
export class UsersUpdateComponent implements OnInit {
  // pageTitle: string;
  users: User[];
  roles: KeyValuePair[];
  saveDisabled: boolean = true;

  constructor(private _userUpdateService: UsersUpdateService) {
    // this.pageTitle = 'User component';
  }

  ngOnInit(): void {
    Observable.forkJoin(
      this._userUpdateService.getUsers(),
      this._userUpdateService.getRolesInfo()
    ).subscribe(
      (data) => {
        this.users = data[0];
        this.roles = data[1];
      },
      (error) => {
        console.log(error);
      }
    )
    ;
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

  getRolesInfo(): void {
    this._userUpdateService.getRolesInfo().subscribe(
      (roles: KeyValuePair[]) => {
        this.roles = roles;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onSelectChange(event: any, userTemp: User): void {
    this.saveDisabled = false;
    userTemp.roleId = event.target.value;
  }

  save(): void {
    console.log(this.users);
  }
}
