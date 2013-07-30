'use strict';

/* Controllers */
myAppModule.controller('MyController', [ '$scope', function($scope) {
    $scope.editorOptions = {
            theme: 'solarized dark',
            mode: 'q',
            lineWrapping : true,
            lineNumbers: true,
            indentUnit: 4,
            smartIndent: true,
            electricChars: true

        };
    $scope.x = 'select from trade';

    $scope.currentPage = 0;
    $scope.pageSize = 4;
    $scope.numberOfPages=function(){
        return Math.ceil($scope.chartdata.length/$scope.pageSize);                
    };
    var tempCols = ['Company','Last Trade','Trade Time','Change','Prev Close','Open','Bid','Ask','Estimate'];
    var tempData =  
           [{
             comp: "GOOG <span class=\"co-name\">Google Inc.</span>",
             lastTrade: "597.74",
             tradeTime: "12:12PM",
             change: "14.81 (2.54%)",
             prevClose: "582.93",
             open: "597.95",
             bid: "597.73 x 100",
             ask: "597.91 x 300",
             yTargetEst: "731.10"
          },   
          {
             comp: "AAPL <span class=\"co-name\">Apple Inc.",
             lastTrade: "378.94",
             tradeTime: "12:22PM",
             change: "5.74 (1.54%)",
             prevClose: "373.20",
             open: "381.02",
             bid: "378.92 x 300",
             ask: "378.99 x 100",
             yTargetEst: "505.94"
          },   
          {
             comp: "AMZN <span class=\"co-name\">Amazon.com Inc.</span>",
             lastTrade: "191.55",
             tradeTime: "12:23PM",
             change: "3.16 (1.68%)",
             prevClose: "188.39",
             open: "194.99",
             bid: "191.52 x 300",
             ask: "191.58 x 100",
             yTargetEst: "240.32" 
          },   
          {
             comp: "ORCL <span class=\"co-name\">Oracle Corporation</span>",
             lastTrade: "31.15",
             tradeTime: "12:44PM",
             change: "1.41 (4.72%)",
             prevClose: "29.74",
             open: "30.67",
             bid: "31.14 x 6500",
             ask: "31.15 x 3200",
             yTargetEst: "36.11"
          },   
          {
             comp: "MSFT <span class=\"co-name\">Microsoft Corporation</span>",
             lastTrade: "25.50",
             tradeTime: "12:27PM",
             change: "0.66 (2.67%)",
             prevClose: "24.84",
             open: "25.37",
             bid: "25.50 x 71100",
             ask: "25.51 x 17800",
             yTargetEst: "31.50" 
          },   
          {
             comp: "CSCO <span class=\"co-name\">Cisco Systems, Inc.</span>",
             lastTrade: "18.65",
             tradeTime: "12:45PM",
             change: "0.97 (5.49%)",
             prevClose: "17.68",
             open: "18.23",
             bid: "18.65 x 10300",
             ask: "18.66 x 24000",
             yTargetEst: "21.12"
          },   
          {
             comp: "YHOO <span class=\"co-name\">Yahoo! Inc.</span>",
             lastTrade: "15.81",
             tradeTime: "12:25PM",
             change: "0.11 (0.67%)",
             prevClose: "15.70",
             open: "15.94",
             bid: "15.79 x 6100",
             ask: "15.80 x 17000",
             yTargetEst: "18.16"
          }];

    $scope.chartdata = tempData;
    $scope.chartcols = tempCols;

}]);

myAppModule.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    };
});
