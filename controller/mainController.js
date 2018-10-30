app.controller("mainController", ["$scope","$window","$rootScope", function ($scope,$window,$rootScope) {  
    $scope.email = $rootScope.email;
    $scope.password = $rootScope.password;
    $scope.domain = $rootScope.domain;
}]);