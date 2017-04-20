import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ImagesUpdateService} from "./imagesUpdate.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Image} from "./image";

@Component({
  moduleId: module.id,
  templateUrl: 'imagesUpdate.component.html',
  styleUrls: ['images.component.01.css', 'images.component.02.css']
})
export class ImagesUpdateComponent implements OnInit {
  pageTitle: string;
  imageForm: FormGroup;
  image: Image;
  constructor(
      private _imagesUpdateService: ImagesUpdateService,
      private _router: Router,
      private fb: FormBuilder
  ) {
    this.pageTitle = 'Image Update';
    // this.getImages();
  }

  ngOnInit(): void {
    this.image = this._imagesUpdateService.image;
    this.imageForm = this.fb.group({
      name: [this.image.name, [Validators.required, Validators.minLength(3)]],
      imageURL: [this.image.imageURL, [Validators.required, Validators.minLength(3)]],
      description: [this.image.description, [Validators.required, Validators.minLength(3)]],
      imageInfo: [this.image.imageInfo, [Validators.required, Validators.minLength(3)]],
      creationDate: [this.image.creationDate, [Validators.required, Validators.minLength(3)]]
    });
  }

  backImagesList() {
    this._router.navigate(["admin/images"]);
    return false;
  }

  addImage() {
    console.log(this.imageForm);
    return false;
  }
  save(): void {
    console.log(this.imageForm);
  }
}
