import {Component, OnInit}  from '@angular/core';

@Component({
  templateUrl: 'app/admin/users/users.component.html'
  // styleUrls: ['app/products/product-list.component.css']
})
export class UsersComponent implements OnInit {
  pageTitle: string;
  constructor() {
    this.pageTitle = 'User component';
  }


  ngOnInit(): void {

  }

  onRatingClicked(message: string): void {
  }
}
