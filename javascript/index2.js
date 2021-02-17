$(document).ready(function() {
	(function() {  
	   var elem = $('.fade').hide();  
		  var i = 0;  
		  (function displayImages() {  
			 elem.eq(i++).fadeIn(200, displayImages);  
		  })();    
	})();  
});
