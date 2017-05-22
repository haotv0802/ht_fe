import {Component} from '@angular/core';
import {NguiScrollableDirective} from "@ngui/scrollable";

@Component({
  templateUrl: 'app/common/home/welcome.component.html',
  styleUrls: ['app/common/home/welcome.component.css']
})
export class WelcomeComponent {
  public pageTitle: string = 'Welcome';
  id: string = 's1';
  hid: string = 'h1';
  wid: string = 'w1';
  scrollTo(selector: string, parentSelector: string, horizontal: boolean) {
    NguiScrollableDirective.scrollTo(
      selector,       // scroll to this
      parentSelector, // scroll within (null if window scrolling)
      horizontal,     // is it horizontal scrolling
      10              // distance from top or left
    );
  }
}
