// app.ts
import { module, element, bootstrap, ILogService } from 'angular';
import '@uirouter/angularjs'
import { AppComponent } from '../app/app.component';
import { HomeComponent } from '../app/home/home.component';
import { UserComponent } from '../app/user/user.component';
import { UserService } from '../app/services/user.services';

import './app.less';

export let app = module('app', [
    'ui.router'
])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider.state({
            name: 'app',
            url: '/app',
            component: AppComponent.NAME
        }).state(
            {
                name: 'app.home',
                url: '/home',
                component: HomeComponent.NAME
            }).state(
            {
                name: 'app.user',
                url: '/user?id',
                component: UserComponent.NAME
            });

        $urlRouterProvider.otherwise('/app');
    }])
    .component(AppComponent.NAME, new AppComponent())
    .component(HomeComponent.NAME, new HomeComponent())
    .component(UserComponent.NAME, new UserComponent())
    .service(UserService.NAME, UserService);
element(document).ready( () => {
    bootstrap(document, ['app']);
});
