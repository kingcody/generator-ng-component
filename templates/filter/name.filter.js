<% if (hasFilter('iife')) { %>(function() {
<% } %>'use strict';

angular.module('<%= scriptAppName %>')
  .filter('<%= cameledName %>', function () {
    return function (input) {
      return '<%= cameledName %> filter: ' + input;
    };
  });<% if (hasFilter('iife')) { %>

})();<% } %>
