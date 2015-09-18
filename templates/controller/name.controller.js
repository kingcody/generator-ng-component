<% if (hasFilter('iife')) { %>(function() {
<% } %>'use strict';

angular.module('<%= scriptAppName %>')
  .controller('<%= classedName %>Ctrl', function ($scope) {
    $scope.message = 'Hello';
  });<% if (hasFilter('iife')) { %>

})();<% } %>
