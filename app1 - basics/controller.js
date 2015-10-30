angular.module('app1').controller('mainCtrl', ['$scope', 'mainService', function($scope, mainService){
	
	$scope.bananaInfo = mainService.returnData();
	
	
	
}]);