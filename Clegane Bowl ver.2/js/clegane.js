$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $nav = $('.main-nav');
    $nav.toggleClass('open');
	});
});

$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset1 = startchange.offset();
	 var glance = $('#at_a_glance');
	 var glanceOff = glance.offset();
	 var numbers = $('behind_the_numbers');
	 var numbersOff = numbers.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset1.top) {
					$('#bar1').css('background', '#07080A');
          $('#bar1').css('background', '#07080A');
					$('#bar2').css('background', '#07080A');
					$('#bar3').css('background', '#07080A');
					$('#menu').css('background', '#fff');
					$('a').css('color', '#000');
					$('p').css('color', '#000');
					$('#nav-pin').css('background', '#fff');
					$('#nav-text').html('AT A GLANCE');
       } else {
          $('#bar1').css('background', '#fff');
					$('#bar2').css('background', '#fff');
					$('#bar3').css('background', '#fff');
					$('#menu').css('background', '#07080A');
					$('a').css('color', '#fff');
					$('p').css('color', '#fff');
					$('#nav-pin').css('background', '#07080A');
					$('#nav-text').html(' ');
       }
			 if (scroll_start > numbers.offsetTop && scroll_start <= glance.offsetTop){
				 $('#bubble1').addClass('fa-circle');
			 }
			 else{
				 $('#bubble1').removeClass('fa-circle');
			 }
   });
});

$(document).ready(function(){
	var hype_array = ['"ALL MEN MUST HYPE"', '"THE NIGHT IS DARK AND FULL OF HYPE"', '"HYPE THE DOOR"', '"HYPE CUTS DEEPER THAN SWORDS"', '"MOST MEN WOULD RATHER DENY A HARD HYPE THAN FACE IT"', '"WHAT DO WE SAY TO THE LORD OF HYPE?" <br> "TODAY"', '"FUCKING CONFIRMED"', '"YOU GONNA DIE FOR SOME HYPE?" <br> "SOMEONE IS"', '"HYPE IS A LADDER"'];
	var random_int = getRandomInt(0, hype_array.length - 1);
	getHype(hype_array[random_int]);

	function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function getHype(value) {
    document.getElementById("hype_text").innerHTML = value;
	}
});


function PlaySound() {
		var snd = new Audio("sounds/AirHorn.mp3");
		snd.play();
}

if (window.matchMedia("(min-width: 700px)").matches) {
$(document).ready(function(){
	 var startchange = $('#startchange');
	 var offset1 = startchange.offset();
	 $(document).scroll(function() {
		 scroll_start = $(this).scrollTop();
		 if(scroll_start > offset1.top) {
    		$("#box").animate({
					width: "42%"
		 });}
		 if(scroll_start > offset1.top+40) {
    		$("#box2").animate({
					width: "42%"
		 });}
		 if(scroll_start > offset1.top+80) {
			 $("#box3").animate({
				 svgWidth: 565
		 });}
	});
});
}
