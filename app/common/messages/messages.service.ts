import {Injectable} from "@angular/core";
import {Constants} from "../constant";
import {HTTPService} from "../HTTP.service";

@Injectable()
export class MessagesService {

  public keyValuePairs: any[];

  constructor(
    private _constants: Constants,
    private _httpService: HTTPService
  ) {
    console.log("messages");
    // this.getMessages().subscribe(
    //   (res) => {
    //     this.keyValuePairs = res;
    //     // console.log("key value pairs: ");
    //     // console.log(this.keyValuePairs);
    //     // console.log(this.keyValuePairs["admin.roomList.name"]);
    //   },
    //   (error: Error) => {
    //     console.log(error);
    //   }
    // );
  }

  getMessage(key: string): string {
    try {
      return this.keyValuePairs[key];
    }
    catch (err) {
      // console.log(err);
      return "";
    }
    // let result = this.keyValuePairs[key];
    // if (null == result) {
    //   return "";
    // }
    // return result;
  }

  getMessages(): void {
    this._httpService.get(this._constants.ADMIN_MESSAGES_SERVICE_URL)
      .map(
        (res) => {
          // console.log(res.json());
          return res.json();
        }
      )
      // .do(
      //   (data) => {
      //     console.log("do print json");
      //     console.log(JSON.stringify(data));
      //   }
      // )
      // .subscribe(
      //   (res) => {
      //     this.keyValuePairs = res;
      //   },
      //   (error: Error) => {
      //     console.log(error);
      //   }
      // )
      .subscribe(
        (res) => {
          this.keyValuePairs = res;
          // console.log("key value pairs: ");
          // console.log(this.keyValuePairs);
          // console.log(this.keyValuePairs["admin.roomList.name"]);
        },
        (error: Error) => {
          console.log(error);
        }
      );
    ;
  }
}