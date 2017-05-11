var app = angular.module('InterestApp',[]);

app.controller('SimpleInterestCtrl', function($scope) {
  $scope.totalSimpleInterest = 0;
  $scope.totalSimpleAmountBalance = 0;
  $scope.simpleInterestData = {
    amount: '',
    period:'',
    rate:''
  }

  $scope.calculateSimpleInterest = function(interestData) {
    console.log(interestData);
    $scope.totalSimpleAmountBalance = interestData.amount*(1 + (interestData.rate/100)*(interestData.period));
    $scope.totalSimpleInterest = $scope.totalSimpleAmountBalance - interestData.amount;
  }
})

app.controller('CompoundInterestCtrl', function($scope){
  $scope.totalCompoundInterest = 0;
  $scope.totalCompoundAmountBalance = 0;
  $scope.compoundInterestData = {
    amount: '',
    period:'',
    rate:'',
    frequency:''
  }

  $scope.calculateCompoundInterest = function(interestData) {
    var p = interestData.amount;
    var r = interestData.rate;
    var n = interestData.frequency;
    var t = interestData.period;
    console.log(interestData);
    console.log(( p*( 1 + (r/100)/n )));
    console.log((n*t))
    $scope.totalCompoundAmountBalance = p * Math.pow( ( 1 + (r/100)/n ), (n*t));
    $scope.totalCompoundInterest = $scope.totalCompoundAmountBalance - interestData.amount;
  }
})



