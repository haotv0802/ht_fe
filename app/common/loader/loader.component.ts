import {Component} from '@angular/core';

@Component({
  selector: 'loader',
  moduleId: module.id,
  templateUrl: 'loader.component.html',
  styleUrls: ['fountain.component.css', 'bubbling.component.css']
})
export class LoaderComponent {
  isShow: boolean = true;

  closeLoader() {
    this.isShow = false;
  }

  displayLoader() {
    this.isShow = true;
  }
}
