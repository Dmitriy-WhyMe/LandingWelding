(function ($) {
	$(document).ready(function () {
		$('.text').click(function(){
			$('.form ').toggleClass('active');
		});


		$('#pagepiling').pagepiling({
			menu: null,
			direction: 'vertical',
			verticalCentered: true,
			sectionsColor: [],
			anchors: [],
			scrollingSpeed: 700,
			easing: 'swing',
			loopBottom: false,
			loopTop: false,
			css3: true,
			normalScrollElements: null,
			normalScrollElementTouchThreshold: 5,
			touchSensitivity: 5,
			keyboardScrolling: true,
			sectionSelector: '.section',
			animateAnchor: false,
			//events
			onLeave: function(index, nextIndex, direction){},
			afterLoad: function(anchorLink, index){},
			afterRender: function(){},
		});
		



		const btnOk = document.querySelector('.btn__play');
		const wrapperVideo = document.getElementById('fon');
		btnOk.addEventListener('click',function(){
			wrapperVideo.play();
		});
		$(".btn__play").click(function(){
			$(this).hide();
		});
	});
})(jQuery);