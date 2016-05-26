var app = angular.module('stockFinder', [])
app.controller('liststock', function($scope, $http)  {
	$scope.stocked = [] 
	$http.get("https://api.myjson.com/bins/1o28q.json").success(function(response) {
		$scope.stocked = response;  
        });
});

