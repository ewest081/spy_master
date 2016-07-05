/**
 * Created by lizwestberg on 2/1/16.
 */
//[][][][][][][][][][][][][][][][][][][][][][][][][][]
//              Client Requirements
//[][][][][][][][][][][][][][][][][][][][][][][][][][]
var app = angular.module('clientApp', ['ngRoute']);

//[][][][][][][][][][][][][][][][][][][][][][][][][][]
//              Angular Routes
//[][][][][][][][][][][][][][][][][][][][][][][][][][]
// app.config(['$routeProvider', function($routeProvider){
//     $routeProvider
//         .when('/', {
//           templateUrl: 'views/index.html',
//           controller: 'MainController'
//         });
// }]);

//[][][][][][][][][][][][][][][][][][][][][][][][][][]
//              App Controllers
//[][][][][][][][][][][][][][][][][][][][][][][][][][]

app.controller('MainController', ['$scope', function($scope){

  function randomNumber(max) {
     return Math.floor(Math.random() * (1 + max - 0) + 0);
   }

  $scope.newGrid = function(){
    var colorArray = ["Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Red", "Red", "Red", "Red", "Red", "Red", "Red", "Red", "Black", "Grey", "Grey", "Grey", "Grey", "Grey", "Grey", "Grey", "Purple"];
    $scope.gridArray = [];

    //pull a random color from the array based on it's index
    //add that color to a new array to be used on the DOM
    //Cycle through until the colorArray is empty

    for (i=0; i < 25; i++){
      var max = colorArray.length - 1;
      var colorIndex = randomNumber(max);
      $scope.gridArray.push(colorArray[colorIndex]);
      colorArray.splice(colorIndex, 1);
    }

    console.log($scope.gridArray);
  };





}]);
