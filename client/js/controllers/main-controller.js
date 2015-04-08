app.controller('mainController', ['$scope', '$resource', function ($scope, $resource) {
	var Angle = $resource('/api/angles');

	Angle.query(function (results) {
		$scope.angles = results;
	});

	$scope.angles = [];

	$scope.createAngle = function () {
		var angle = new Angle();
		angle.name = $scope.angleName;
		angle.map = $scope.angleMap;
		angle.comment = $scope.angleComment;
		angle.link = $scope.angleLink;
		angle.$save(function (result) {
			$scope.angles.push(result);
			$scope.angleName = '';
		});
	}
}]);