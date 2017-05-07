export class UserService {
  static $inject = ['$q','$http'];
  static NAME:string = 'userService';
  constructor(protected $q: ng.IQService, protected $http : ng.IHttpService) {}
  public getAll(): angular.IHttpPromise<any> {
     return this.$http.get('http://demo5512590.mockable.io/users');
  }
}
