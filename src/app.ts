// app.ts
import { module, element, bootstrap } from "angular";
import "@uirouter/angularjs";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { UserService } from "./services/user.services";

import "./app.scss";

export let app = module("app", ["ui.router"]);

app
  .config(($stateProvider, $urlRouterProvider) => {
    const appState = { name: "app", url: "/app", component: AppComponent.NAME };
    const homeState = {
      name: "app.home",
      url: "/home",
      component: HomeComponent.NAME,
    };
    const userState = {
      name: "app.user",
      url: "/user?id",
      component: UserComponent.NAME,
    };

    $stateProvider.state(appState);
    $stateProvider.state(homeState);
    $stateProvider.state(userState);

    $urlRouterProvider.otherwise("/app");
  })

  .component(AppComponent.NAME, new AppComponent())
  .component(HomeComponent.NAME, new HomeComponent())
  .component(UserComponent.NAME, new UserComponent())
  .service(UserService.NAME, UserService);
element(document).ready(() => {
  bootstrap(document, ["app"]);
});

export default app;
