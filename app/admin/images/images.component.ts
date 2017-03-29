import {Component, OnInit, Input}  from '@angular/core';
import {Image} from "./image";
import {ImagesService} from "./images.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: 'images.component.html'
  // templateUrl: 'app/admin/rooms/rooms.component.html'
  // styleUrls: ['app/products/product-list.component.css']
})
export class ImagesComponent implements OnInit {
  pageTitle: string;
  images: Image[];
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      description: {
        title: 'Description'
      },
      creationDate: {
        title: 'Creation Date'
      }
    }
  };

  constructor(private _imagesService: ImagesService, private _router: Router) {
    // this.pageTitle = 'Room component';
    // this.getImages();
  }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    // console.log("get room Types");
    this._imagesService.getImages().subscribe(
      (images) => {
        console.log("get images: ----");
        console.log(images);
        this.images = images;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  counter(length: number){
    return new Array(length);
  }
}
