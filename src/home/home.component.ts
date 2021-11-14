import templateUrl from "./home.html";
class HomeController implements ng.IController {
  welcome: string = "hello ng";
  constructor() {}
}

export class HomeComponent implements ng.IComponentOptions {
  static NAME: string = "homeView";
  controller: any;
  templateUrl: any;
  constructor() {
    this.controller = HomeController;
    this.templateUrl = templateUrl;
  }
}
