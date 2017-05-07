import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ImagesComponent} from "./images.component";
import {ImagesService} from "./images.service";
import {ImagesUpdateComponent} from "./imagesUpdate.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ImagesUpdateService} from "./imagesUpdate.service";
import {ImageDetailsGuard} from "./image-guard.service";
import {OpenDirective} from "./modal/open.component";
import {AlertComponent} from "./modal/alert.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'admin/images', component: ImagesComponent},
      {
        path: 'admin/images/update',
        canActivate: [ImageDetailsGuard],
        component: ImagesUpdateComponent
      }
    ]),
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ImagesComponent,
    ImagesUpdateComponent,
    OpenDirective,
    AlertComponent
  ],
  providers: [ImagesService, ImagesUpdateService, ImageDetailsGuard]
})
export class ImagesModule {
}