<% if (hasFilter('iife')) { %>(function() {
<% } %>'use strict';

angular.module('<%= scriptAppName %>')
  .directive('<%= cameledName %>', function () {
    return {
      templateUrl: '<%= htmlUrl %>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });<% if (hasFilter('iife')) { %>

})();<% } %>
