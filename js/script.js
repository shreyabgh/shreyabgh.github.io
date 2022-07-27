/* -----------------------------------------------------------------------------

The Damon - Resume HTML5 Template

File:           JS Core
Version:        1.0
Last change:    00/00/00 
Author:         Xstheme

-------------------------------------------------------------------------------- */

"use strict";
var menuOffset = $("header").offset().top;

//as the page is scrolling, measure how far we've scrolled
$(window).scroll(function() {
	var amountScrolled = $(window).scrollTop();

  //if we have scrolled past the menu offset, make it stick
  if ($(this).scrollTop() > 50) {
  	$("header").removeClass("not-stuck");
  	$("header").addClass("stuck");
  } else {
  	$("header").removeClass("stuck");
  	$("header").addClass("not-stuck");
  }
});

var Damon = {
	init: function() {
		this.Basic.init();  
	},
	Basic: {
		init: function() {
			this.quickScroll();
			this.menuBar();
			this.serviceSlide();
			this.testimonialSlide();
			this.productTab();
			this.typeStyle();
			this.scrollTop();
			this.lightBox();
			this.preloader();
		},

/* - Start Lightbox
================================================*/
lightBox: function (){
	lightbox.option({
		'resizeDuration': 200,
		'wrapAround': true
	})

},
/* - End Lightbox
================================================*/

/* - Start of preloader
================================================*/
preloader: function (){

$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});
},

/* - End of preloader
================================================*/

/* - Start Typed js
================================================*/
typeStyle: function (){
	$(function(){
		$(".typed").typed({
			stringsElement: $(".typed-strings"),
			loop: true,
			backDelay: 7000,
		});
	});

},

/* - End Typed js
================================================*/


/* - Start of Scroll to top
================================================*/
scrollTop: function (){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

},

/* - End of Scroll to top
================================================*/


/* - Start Quick scroll
================================================*/
quickScroll: function (){

	$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
},

/* - End of Quick Scroll
================================================*/


/* - Start of menu bar
================================================*/
menuBar: function (){
	$(document).ready(function() {
		var trigger = $('.hamburger'),
		isClosed = false;

		trigger.click(function() {
			hamburger_cross();
		});

		function hamburger_cross() {

			if (isClosed == true) {
				trigger.removeClass('is-open');
				trigger.addClass('is-closed');
				isClosed = false;
			} else {
				trigger.removeClass('is-closed');
				trigger.addClass('is-open');
				isClosed = true;
			}
		}

		$('[data-toggle="offcanvas"]').click(function() {
			$('#wrapper').toggleClass('toggled');
		});
	});
},
/* - End of menu bar
================================================*/


/* - Start of service slide
================================================*/
serviceSlide: function (){
	$('.services-content-slide').owlCarousel({
		margin:30,
		responsiveClass:true,
		pagination: true,
		navSpeed:500,
		autoplay: true,
		responsive:{
			0:{
				items:1,
				pagination: true,
			},
			400:{
				items:1,
				pagination: true,
			},
			600:{
				items:2,
				pagination: true,
			},
			700:{
				items:2,
				pagination: true,
			},
			1000:{
				items:3,
				pagination: true,

			}
		},
	})
},
/* - End of service slide
================================================*/

/* - Start of testimonial slide
================================================*/
testimonialSlide: function (){
	$('.testimonial-content-slide').owlCarousel({
		margin:30,
		responsiveClass:true,
		pagination: true,
		navSpeed:500,
		autoplay: true,
		responsive:{
			0:{
				items:1,
				pagination: true,
			},
			400:{
				items:1,
				pagination: true,
			},
			600:{
				items:2,
				pagination: true,
			},
			700:{
				items:2,
				pagination: true,
			},
			1000:{
				items:3,
				pagination: true,

			}
		},
	})
},
/* - End of testimonial slide
================================================*/


/* - Start of Product tab
================================================*/
productTab: function (){
	$(function(){
		$('.project-item-details').mixItUp();
	});

},
/* - End of of Product tab
================================================*/
}
}
$(document).ready(function (){
	Damon.init();
});