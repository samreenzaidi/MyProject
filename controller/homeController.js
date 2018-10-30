app.controller("homeController", ["$scope","$window","$rootScope", function ($scope,$window,$rootScope) {  
    $scope.validationError = false;
    $scope.submit = function () {
        
      $rootScope.email = $scope.myForm.email.$modelValue;
      $rootScope.password = $scope.myForm.password.$modelValue;
      if($scope.myForm.domain.$modelValue!=undefined)
        $rootScope.domain = $scope.myForm.domain.$modelValue;
      else
        $rootScope.domain = "Advanced";
      if($scope.myForm.email.$valid && $scope.myForm.password.$valid){
        $window.location.href = '#/main';
      } else{
         $scope.validationError = true;
      }
    };
    $scope.reset = function () {
      $scope.email="";
      $scope.password="";
    };
}]);