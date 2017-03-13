import { Component, OnChanges, Input, Output, OnInit, EventEmitter } from 'angular2/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges, OnInit {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
        // console.log('In OnChanges of Star');
        // console.log('rating: ' + this.rating);
        // console.log('starWidth: ' + this.starWidth);
    }
    ngOnInit(): void {
        // console.log("In OnInit of Star");
    }
    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}