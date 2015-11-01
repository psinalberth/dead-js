'use strict';

angular.module('myApp.programas', ['ngRoute', 'ui.bootstrap', 'ngAnimate'])
 
    .config(['$routeProvider', function($routeProvider) {
      
      $routeProvider.when('/programas/new', {
        templateUrl: './programas/programas.html',
        controller: 'ProgramaController'
      });

      $routeProvider.when('/programas', {
        templateUrl: './programas/view.html',
        controller: 'ProgramaController'
      });

      $routeProvider.when('/programas/:id', {
        templateUrl: './programas/programa.html',
        controller: 'ProgramaController'
      });

    }])

    .controller('ProgramaController', ['$scope', '$http', function($scope, $http, $location) {

    	$scope.programas = [];
    	$scope.programa = {};
    	$scope.updated_data = {};

    	$scope.init = function() {
    		$http.get('http://localhost:8000/api/programas').success(function(data) {
    			$scope.programas = data;
    		});
    	}

    	$scope.init();

    	$scope.create = function() {
    		$http.post('http://localhost:8000/api/programas', $scope.programa).success(function(data) {

    			$scope.programas.push(data);

    			$scope.programa.nome = "";
    			$scope.programa.sigla = "";
    			$scope.programa.descricao = "";
    		});
    	}

        $scope.update = function() {
            $http.put('http://localhost:8000/api/programas', $scope.programa).success(function(data) {

                $scope.programas.push(data);

                $scope.programa.nome = "";
                $scope.programa.sigla = "";
                $scope.programa.descricao = "";
            });   
        }
    }]);

