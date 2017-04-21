import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";
import {ImagesUpdateService} from "./imagesUpdate.service";
import {FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {Image} from "./image";

@Component({
  moduleId: module.id,
  templateUrl: 'imagesUpdate.component.html',
  styleUrls: ['images.component.01.css', 'images.component.02.css']
})
export class ImagesUpdateComponent implements OnInit, OnDestroy {

  pageTitle: string;
  imageForm: FormGroup;
  image: Image;
  sub: any;
  constructor(
      private _imageUpdateService: ImagesUpdateService,
      private _router: Router,
      private fb: FormBuilder,
      private _route: ActivatedRoute
  ) {
    this.pageTitle = 'Image Update';
    // this.getImages();
  }

  ngOnInit(): void {
    this.imageForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      // Comments for reference
      // imageURL: [this.image.imageURL],
      // imageURL: new FormControl({value: this.image.imageURL, disabled: true}, Validators.required),
      imageURL: new FormControl({value: '', disabled: true}),
      description: ['', [Validators.required, Validators.minLength(3)]],
      imageInfo: ['', [Validators.required, Validators.minLength(3)]],
      creationOn: ['', [Validators.required, Validators.minLength(3)]],
      imageFile: ['']
    });

    this.sub = this._route.queryParams.subscribe(
      params => {
        let id = +params['id'];
        if (id && id != NaN) {
          this._imageUpdateService.getImageById(id).subscribe(
            (res) => {
              this._imageUpdateService.image = res;
              this.image = res;
              this.populateData();
            },
            (error) => {
              console.log(error);
              this._router.navigate(["admin/images"]);
            }
          );
        } else {
          this.image = this._imageUpdateService.image;
          this.populateData();
        }
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  populateData(): void {
    this.imageForm.setValue({
      id: this.image.id,
      name: this.image.name,
      imageURL: this.image.imageURL,
      description: this.image.description,
      imageInfo: this.image.imageInfo,
      creationOn: this.image.createdOn,
      imageFile: ''
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
    console.log(this.imageForm.value);
  }
}