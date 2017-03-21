import {Injectable} from '@angular/core';
import {App} from "./app";

@Injectable()
export class AppService {
  app: App = new App();
}