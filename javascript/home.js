$(document).ready(function(){
	"use strict";
   // var containerHeight = $('#container').height();
    
	var flag= true;
	var flag1 = false;
	//var coz = document.getElementById("coz");

    $(window).scroll(function(){
		//alert(window.pageYOffset);
		if ( (window.pageYOffset > 800) && (flag) &&(window.pageYOffset < 1422)){
			document.getElementById("leftgear").style.position = "fixed";
			document.getElementById("leftgear").style.transform = "rotate("+(((window.pageYOffset-800)/622)*90)+"deg)";
		}

		else if ( (window.pageYOffset > 1500))
        {
			document.getElementById("leftgear").style.position = "relative";
		}
        if ( (window.pageYOffset < 400) && (!flag) &&(!flag1)){
			document.getElementById("leftgear").style.position = "fixed";
			$('video').attr("src", "../videos/emoji.webm");	
			document.getElementById("leftgear").style.transform = "rotate("+0+"deg)";
			flag = true;}
        else if ( (window.pageYOffset > 400) && (flag) &&(window.pageYOffset < 800)){
			document.getElementById("leftgear").style.position = "fixed";
        	$('video').attr("src", "../videos/splitscreen.webm");	
			document.getElementById("leftgear").style.transform = "rotate("+0+"deg)";
			flag = false;
		}
		else if ( (window.pageYOffset > 800) && (!flag))
        {
			document.getElementById("leftgear").style.position = "fixed";
        	$('video').attr("src", "../videos/nfs3.webm");
			flag = true;
		}
		
    });
});

(function (){
    var previousScroll = 0;
    var navbar = document.getElementById('navbar'),
        navClasses = navbar.classList; // classList doesn't work <IE10

    window.addEventListener('scroll', function(e){
       var currentScroll = window.scrollY;
       var isDown = currentScroll > previousScroll;

       if ( isDown && !navClasses.contains('scrolled') ){
          // scrolling down, didn't add class yet
          navClasses.add('scrolled'); // we hide the navbar
       } else if ( !isDown ){
          // scrolling up
          navClasses.remove('scrolled'); // won't error if no class found
       }

       // always update position
       previousScroll = currentScroll;
    });
}());