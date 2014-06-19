define(['angular', 'app'], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'app/partials/first.html',
			controller: 'FirstCtrl'
		});
		$routeProvider.when('/view1', {
			templateUrl: 'app/partials/partial1.html',
			controller: 'MyCtrl1'
		});
		$routeProvider.when('/view2', {
			templateUrl: 'app/partials/partial2.html',
			controller: 'MyCtrl2'
		});
		$routeProvider.when('/support', {
			templateUrl: 'app/partials/support.html',
			controller: 'SupportCtrl'
		});
		$routeProvider.when('/products', {
			templateUrl: 'app/partials/products.html',
			controller: 'ProductsCtrl'
		});
		$routeProvider.when('/products2', {
			templateUrl: 'app/partials/products2.html',
			controller: 'Products2Ctrl'
		});
		$routeProvider.otherwise({redirectTo: '/'});
	}]);

});
