$(document).ready(function(){
 $( "#draggable" ).draggable();
 $( "#accordion" ).accordion();

	//slidetoggle
	$('.panel').click(function(){
		$('.content').slideToggle(1000);
	})


	// hide
	$('#hide').click(function(){
		$('h2').fadeOut(1000);
	});
	// show
	$('#show').click(function(){
		$('h2').fadeIn(2000);
	});
	// toggle
	$('#toggle').click(function(){
		$('h2').fadeToggle(2000);
	});
	// to
	$('#fto').click(function(){
		$('h2').fadeTo(1000, 1);
	});

});


