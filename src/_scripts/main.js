'use strict';

$( document ).ready(function() {

	var	$slider = $('.slider__container'),
		$serch__button = $('.serch__button'),
		$serch__input = $('.serch__input'),
		$hamburger_button = $('.hamburger-button');

	$($serch__button).on('click', function() {
		$($serch__input).toggleClass('active');
		$($serch__input).focus()
	});

	$($slider).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7500,
		dots: true,
	});

	$(".hamburger-button").click(function() {
		$(this).toggleClass("active");
		$(".nav").slideToggle();
	})
});