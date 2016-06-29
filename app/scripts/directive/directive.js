angular.module('trendMicroApp').directive('bgResize', function ($window) {
  return function (scope, element) {
    var w = angular.element($window);
    scope.getWindowDimensions = function () {
      hh = w.height();
      ww = w.width();
      aa = ww / hh;
      return {'h': hh, 'w': ww};
    };

    scope.getElmDimension = function () {
      ww = element.height();
      ww = element.width();
      aa = ww / hh;
      return {'h': hh, 'w': ww, 'a': aa};
    };

    scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
      scope.windowHeight = newValue.h;
      scope.windowWidth = newValue.w;
      ElmDimensions = scope.getElmDimension();
      scope.styleh = function () {
        ss = {'height': '100%'}
      }
      scope.style = function () {
        if ((scope.windowWidth / scope.windowHeight) < ElmDimensions.aa) {
          ss = {'height' : '100%'};
        }else {
          ss = {'width' : '100%'};
        }
        
        return ss;
      }
    }, true);
    
    w.bind('resize',function () {
      scope.$apply();
    })

  }
});
