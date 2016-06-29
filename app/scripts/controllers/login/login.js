/**
 * login Controller
 */
angular.module('trendMicroApp').controller('LoginCtrl', [
  '$scope', '$http', '$q', function ($scope, $http, $q) {
    $scope.user = {};
    $scope.login_submit = function () {
      var _post_date = {
        'username': $scope.user.username,
        'password': $scope.user.password
      };
      console.log('username' + _post_date.username);
      console.log('password' + _post_date.password);
    }
  }
]);
