angular.module('app3')
	.controller('mainCtrl', ['$scope', 'myService', function($scope, myService){
		$scope.something = myService.dataGood();
}]);