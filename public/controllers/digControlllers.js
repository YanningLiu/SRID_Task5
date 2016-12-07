'use strict';

function AppCtrl($scope, $rootScope, $location, $http, socket) {
	
	$scope.showMap = false;
	
	$scope.init = function() {
		console.log("123");
	}
	
	$scope.clickOnMap = function() {
		console.log("HERE!!!");
		$scope.showMap = false;
	}
};