import {Component, OnInit}  from '@angular/core';
import {Image} from "./image";
import {ImagesService} from "./images.service";
import {Router} from "@angular/router";
import {ImagesUpdateService} from "./imagesUpdate.service";
import {Constants} from "../../common/constant";

@Component({
  moduleId: module.id,
  templateUrl: 'images.component.html',
  styleUrls: ['images.component.01.css', 'images.component.02.css']
})
export class ImagesComponent implements OnInit {
  pageTitle: string;
  images: Image[];
  constructor(
    private _imagesService: ImagesService,
    private _router: Router,
    private _imageUpdateService: ImagesUpdateService,
    private _constants: Constants
  ) {
    this.pageTitle = 'Images Management';
    // this.getImages();
  }

  ngOnInit(): void {
    this.getImages();
  }

  displayImage(image: Image) {
    console.log(image);
  }

  editImage(image: Image) {
    // this._imageUpdateService.image = image;
    // this._router.navigate(["admin/images/update"]);
    this.getImageFile(image);
  }

  getImages(): void {
    // console.log("get room Types");
    this._imagesService.getImages().subscribe(
      (images) => {
        this.images = images;
        // for (let i = 0; i < this.images.length; i++) {
        //   let imgTmp = this.images[i];
        //   imgTmp.imageBEURL = this._constants.ADMIN_IMAGES_SERVICE_URL + "/" + imgTmp.id + ".JPG";
        // }
        // $('.carousel').carousel();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  hexToBase64(str: string) {
    return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
  }

  getImageFile(image: Image): any {
    this._imagesService.getImageFile(image.id)
      .subscribe(
        (res) => {
          console.log("res");
          console.log(res.encodedString);
          // console.log("====");
          // console.log(JSON.stringify(res));
          image.imageURL = "data:image/jpeg;base64," + res.encodedString;
        },
        (error) => {
          console.log(error);
        }
      )
    ;
  }

  counter(length: number){
    return new Array(length);
  }

  isActive(url: string) {
    return url === this.images[0].imageURL;
    // return url;
  }
}

