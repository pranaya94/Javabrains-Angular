var app = angular.module("ngModelExapmles",[]);
app.controller("ExamplesCtrl",ExamplesCtrl);

function ExamplesCtrl($scope){

	$scope.textBoxChanged = function(){
		console.log("changed");
	}
}