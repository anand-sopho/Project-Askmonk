
$(function() {
	"use strict";
  	var $window = $(window);
 	var containerHeight = 400;
	var scrollPosition = $(window).scrollTop();
  $window.on('scroll', function() {

    if (scrollPosition > (containerHeight / 2))
        {
        	document.getElementById("container").src = "splitscreen.webm";	
        }
        else if (scrollPosition < (containerHeight / 2))
        {
        	document.getElementById("container").src = "emoji.webm";	
        }

  });

});