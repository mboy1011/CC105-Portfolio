angular.module('shopApp', [])
 .controller('loginController', ['$scope', function ($scope) {
    $scope.username = null;
    $scope.password = null;
    $scope.notFound = false;
    $scope.login = function () {
        console.log($scope.username + ' - ' + $scope.password);
    };
 }]);
