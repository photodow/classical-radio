var bgIntervalID;

$(document).ready(function(){ // on document load
	boxHeight();
	changeBGcolor();
	resizeVideo();
});

$(window).resize(function(){ // on window resize
	boxHeight();
	resizeVideo();
});

function boxHeight(){
	var width = '';
	$('.box').each(function(){
		width = $(this).width();
		$(this).height(width);
	});
}

function bgColor(selector){
	var colorList = ['#7c5330', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#2c8ca1'];
	var ranNum = '';

	$(selector + ':not(.video, .description)').each(function(){
		ranNum = Math.floor(Math.random()*13);
		$(this).css('background-color', colorList[ranNum]).css('transition', 'background-color .8s ease');
	});
}

function changeBGcolor(){
	bgIntervalID = self.setInterval(function(){bgColor('.box')}, 200);
}

function resizeVideo(){
	var width = $('video').width();
	var height = width * 383 / 680;
	$('video').height(height);
}