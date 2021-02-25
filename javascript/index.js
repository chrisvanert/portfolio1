


/* 
$(document).ready(function() {
    

    $(window).scroll( function(){
    

        $('.fade').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            

            if( bottom_of_window > bottom_of_object ){
                
                $(this).css({'opacity':'1'},900);
                    
            }
            
        }); 
    
    });
    
});*/

/* MY EVENT LISTENER -- ENLARGE TEXT ON HOVER */
$(document).ready(function(){
	$(".hovercraft").mouseover(function(){
	  $(".hovercraft").css("font-family", "Merriweather").css("transform", "scale(1.25,1.25)");
	});
	$(".hovercraft").mouseout(function(){
	  $(".hovercraft").css("font-family", "").css("transform", "scale(1,1)");
	});
  });

/* MY EVENT LISTENER -- PROFILE IMAGE SPIN */
/*$(document).ready(function(){
	$(".hovercraftImg").mouseover(function(){
	  $(".hovercraftImg").css("transform", "rotate(270deg)");
	});
	$(".hovercraftImg").mouseout(function(){
	  $(".hovercraftImg").css("transform", "rotate(0deg)");
	});
  });*/

  $(document).ready(function(){
	$("button").click(function(){
	  $(".profileHide").toggle();
	});
  });


/*Fade Out on Scroll*/
var profile = document.getElementById('header');

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}
	
	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

function scrollHandler() {
	fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);

console.log("script is loading");


