var app = angular.module('app', ['duScroll', 'ngRoute']);
app.controller('myCtrl', ['$scope', function() {}]);

var amountScrolled = 300;
$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
        $('a.back-to-top').fadeIn('slow');
    } else {
        $('a.back-to-top').fadeOut('slow');
    }
});