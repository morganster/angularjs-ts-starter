import { UserService } from "../services/user.services";
import templateUrl from "./user.html";
import "./user.scss";

class UserController implements ng.IController {
  static $inject = ["userService", "$state"];
  users: any;
  constructor(public user: UserService, public $state: ng.IController) {
    this.user.getAll().then((data) => {
      this.users = data.data;
    });
  }
}

export class UserComponent implements ng.IComponentOptions {
  static NAME: string = "userComponent";
  controller: any;
  templateUrl: any;
  constructor() {
    this.controller = UserController;
    this.templateUrl = templateUrl;
  }
}
