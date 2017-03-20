$(document).ready(function(){
	"use strict";
   // var containerHeight = $('#container').height();
    
	var flag= true;
	var flag1 = false;
	//var coz = document.getElementById("coz");
		
    $(window).scroll(function(){
		
		if(window.pageYOffset > 800){
			document.getElementById("leftgear").style.transform = "rotate("+(((window.pageYOffset-800)/554)*90)+"deg)";
			//alert(window.pageYOffset);
		}
		 
        if ( (window.pageYOffset < 400) && (!flag) &&(!flag1))
        {
        	$('video').attr("src", "emoji.webm");	
			document.getElementById("leftgear").style.transform = "rotate("+0+"deg)";
			flag = true;
        }
        else if ( (window.pageYOffset > 400) && (flag) &&(window.pageYOffset < 800))
        {
        	$('video').attr("src", "splitscreen.webm");	
			document.getElementById("leftgear").style.transform = "rotate("+0+"deg)";
			flag = false;
        }
		else if ( (window.pageYOffset > 800) && (!flag))
        {
        	$('video').attr("src", "nfs3.webm");
			flag = true;
		}
    }); // scroll function
	
	

});// end document