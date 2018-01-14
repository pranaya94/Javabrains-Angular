
	angular.module("clockApp",[]).controller("TimeCtrl",TimeCtrl);
	
	function TimeCtrl($scope){		
		currentDate = new Date();
		$scope.timeString = currentDate.toTimeString();			
		$scope.updateTime = function(){	
			$scope.userName = "default";					
			currentDate = new Date();
			$scope.timeString = currentDate.toTimeString();	
		}
	}
