app.controller('MainController', ['$scope', 'searchResults', function($scope, searchResults) {

	$scope.searchInput = ""
	
	$scope.retrieve = function() {
		$scope.searchResults = ""
		console.log($scope.searchInput)
		searchResults.api($scope.searchInput)
			.success(function(data) {
				$scope.searchResults = data
			})
	}

}])