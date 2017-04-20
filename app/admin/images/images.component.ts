import {Component, OnInit}  from '@angular/core';
import {Image} from "./image";
import {ImagesService} from "./images.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: 'images.component.html',
  styleUrls: ['images.component.01.css', 'images.component.02.css']
})
export class ImagesComponent implements OnInit {
  pageTitle: string;
  images: Image[];
  constructor(private _imagesService: ImagesService, private _router: Router) {
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
    console.log(image);
  }
  getImages(): void {
    // console.log("get room Types");
    this._imagesService.getImages().subscribe(
      (images) => {
        console.log("get images: ----");
        console.log(images);
        this.images = images;
        // $('.carousel').carousel();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  counter(length: number){
    return new Array(length);
  }

  isActive(url: string) {
    return url === this.images[0].imageURL;
    // return url;
  }
}
