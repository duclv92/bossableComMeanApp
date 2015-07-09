'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		var mail = {
			icon: "glyphicon glyphicon-envelope",
			color: "btn-warning",
			title: "1234",
			description: "Total mail at the last year"
		};
		var music = {
			icon: "glyphicon glyphicon-music",
			color: "btn-success",
			title: "5874",
			description: "Total music at the last year"
		};
		var user = {
			icon: "glyphicon glyphicon-user",
			color: "btn-primary",
			title: "5584",
			description: "Total user at the last year"
		};
		var th = {
			icon: "glyphicon glyphicon-th",
			color: "btn-danger",
			title: "59574",
			description: "Total th at the last year"
		};
		var download = {
			icon: "glyphicon glyphicon-download",
			color: "btn-warning",
			title: "963",
			description: "Total download at the last year"
		};
		var upload = {
			icon: "glyphicon glyphicon-upload",
			color: "btn-success",
			title: "6358",
			description: "Total upload at the last year"
		};
		var tag = {
			icon: "glyphicon glyphicon-tag",
			color: "btn-warning",
			title: "963",
			description: "Total tag at the last year"
		};
		var flag = {
			icon: "glyphicon glyphicon-flag",
			color: "btn-",
			title: "6358",
			description: "Total flag at the last year"
		};

		$scope.infos = [user,mail,music,th,download,upload,flag,tag];
	}
]);
