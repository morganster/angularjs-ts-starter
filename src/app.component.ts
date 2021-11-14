import { StateObject } from "@uirouter/angularjs";
import templateUrl from "./app.component.html";

class AppController implements ng.IController {
  static $inject = ["$state"];
  constructor(public $state: ng.IController) {
    $state.go("app.home");
  }
}

export class AppComponent implements ng.IComponentOptions {
  static NAME: string = "appComponent";
  controller: any;
  templateUrl: any;
  constructor() {
    this.controller = AppController;
    this.templateUrl = templateUrl;
  }
}
