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

  function randomNumber(max, min) {
     return Math.floor(Math.random() * (1 + max - min) + min);
   }

  $scope.newGrid = function(){
    var colorArray = ["Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Blue", "Red", "Red", "Red", "Red", "Red", "Red", "Red", "Red", "Black", "Grey", "Grey", "Grey", "Grey", "Grey", "Grey", "Grey", "Purple"];
    $scope.gridArray = [];
    $scope.wildCard = "";

    //pull a random color from the array based on it's index
    //add that color to a new array to be used on the DOM
    //Cycle through until the colorArray is empty
    //flip a coin and change purple to the wild card color (either red or blue)
    //display the wildcard color.

    for (i=0; i < 25; i++){
      var max = colorArray.length - 1;
      var min = 0;
      var colorIndex = randomNumber(max, min);
      $scope.gridArray.push(colorArray[colorIndex]);
      colorArray.splice(colorIndex, 1);
    }



    for (i=0; i < $scope.gridArray.length; i++){
      if ($scope.gridArray[i] == "Purple"){
        var coinFlip = randomNumber(2,1);
        console.log(coinFlip);

        if (coinFlip == 1){
          $scope.gridArray[i] = "Blue";
          $scope.wildCard = "Blue";
        } else if (coinFlip == 2){
          $scope.gridArray[i] = "Red";
          $scope.wildCard = "Red";
        }
      }
    }

    // console.log($scope.gridArray);
  };





}]);
