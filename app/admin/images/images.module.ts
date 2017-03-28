import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ImagesComponent} from "./images.component";
import {ImagesService} from "./images.service";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'admin/images', component: ImagesComponent}
    ]),
    CommonModule
  ],
  declarations: [ImagesComponent],
  providers: [ImagesService]
})
export class ImagesModule {
}