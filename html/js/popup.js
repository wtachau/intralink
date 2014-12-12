/* Functions to actually show or hide popup */
	
var popupStatus = 0;

function loadPopup(popup) { 
	if(popupStatus == 0) { 
		$(popup).fadeIn(0500); 
		$("#backgroundPopup").css("opacity", "0.7");
		$("#backgroundPopup").fadeIn(0001); 
		popupStatus = 1;
	}	
}
	
function disablePopup() {
	if(popupStatus == 1) {
		$("#defaultPopup").fadeOut("normal");
		// $("#profilePopup").fadeOut("normal");  
		$("#backgroundPopup").fadeOut("normal");  
		popupStatus = 0;
	}
}

jQuery(function($) {
	/* Listen for events to show or hide popup */

	$(".textoverlay").click(function() {
		loadPopup("#defaultPopup"); 
		return false;
	});

	$(this).keyup(function(event) {
		if (event.which == 27) { // 27 is 'Esc' 
			disablePopup();
		}  	
	});
	
	$("div#backgroundPopup").click(function() {
		disablePopup();
	});

	$(".navbar").click(function() {
		disablePopup();
	});

	$("#popup_exit").click(function() {
		disablePopup();
	});
	
});






