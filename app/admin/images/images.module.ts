import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ImagesComponent} from "./images.component";
import {ImagesService} from "./images.service";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {Ng2CompleterModule} from "ng2-completer";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'admin/images', component: ImagesComponent}
    ]),
    CommonModule,
    Ng2SmartTableModule,
    Ng2CompleterModule
  ],
  declarations: [ImagesComponent],
  providers: [ImagesService]
})
export class ImagesModule {
}