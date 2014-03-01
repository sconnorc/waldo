var app = angular.module("app", ["ngAnimate", "ngRoute"]);

app.animation('.content', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      element.fadeIn(750, done);
      return function() {
        element.stop();
      }
    },
    leave: function(element, done) {
      element.fadeOut(700, done)
      return function() {
        element.stop();
      }
    }
  }
});

app.config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl : 'nav/home.html',
		controller  : 'indexController'
	});

	$routeProvider.when('/band', {
		templateUrl : 'nav/band.html',
		controller  : 'bandController'
	});

	$routeProvider.when('/shows', {
		templateUrl : 'nav/shows.html',
		controller : 'showsController'
	});

	$routeProvider.when('/music', {
		templateUrl : 'nav/music.html',
		controller : 'musicController'
	});

	$routeProvider.when('/photos', {
		templateUrl : 'nav/photos.html',
		controller : 'photosController'
	});

	/*$routeProvider.when('/videos', {
		templateUrl : 'nav/videos.html'
	});

	$routeProvider.when('/shop', {
		templateUrl : 'nav/shop.html'
	});*/

	$routeProvider.when('/contact', {
		templateUrl : 'nav/contact.html',
		controller : 'contactController'
	});

	$routeProvider.otherwise({
		redirectTo : '/'
	});

});

app.controller('mainController', function() {

});

app.controller('indexController', function() {
	if ($('.content :first-child').attr('class')=='home ng-scope'){
		$(".contentWrapper").hide();
	}
	else {
		$(".contentWrapper").show();
	}
});

app.controller('bandController', function() {
	if ($(".content").length==0){
		$(".contentWrapper").hide();
	}
	else {
		$(".contentWrapper").show();
	}
});

app.controller('showsController', function() {
	if ($(".content").length==0){
		$(".contentWrapper").hide();
	}
	else {
		$(".contentWrapper").show();
	}
	/*$(document).ready(function() { 
      new BIT.Widget({ 
        "artist":"Arcade Fire", 
        "div_id":"tour-dates",
        "bg_color": "#FFFFFF"
      }).insert_events();
  });*/
});

app.controller('musicController', function() {
	if ($(".content").length==0){
		$(".contentWrapper").hide();
	}
	else {
		$(".contentWrapper").show();
	}
});

app.controller('photosController', function() {
	if ($(".content").length==0){
		$(".contentWrapper").hide();
	}
	else {
		$(".contentWrapper").show();
	}
});

app.controller('contactController', function() {
	if ($(".content").length==0){
		$(".contentWrapper").hide();
	}
	else {
		$(".contentWrapper").show();
	}
});

app.controller('navController', function($scope, $location){
    $scope.isActive = function(route) {
        return route === $location.path();
    }
});