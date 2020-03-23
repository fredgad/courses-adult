$(function() {

  $('.offer__btn').on('click', function(e) {
		e.preventDefault();
		let elementCick = $(this).attr('href'),
		    destination = $(elementCick).offset().top;
		$('body, html').animate({scrollTop: destination}, 800);
	});

	$('.programm__point').on('click', function() {
		$(this).find('.programm__btn').toggleClass('programm__btn_active');
		$('.programm__point').not(this).find('.programm__btn').removeClass('programm__btn_active');
		$(this).next().slideToggle(500);
		$('.programm__point').not(this).next().slideUp(500);
	});
 


  
  $('#slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
  })
    

  $('.title__left_ancor a').on('click', function(e) {
  e.preventDefault();
  let elementCick = $(this).attr('href'),
    destination = $(elementCick).offset().top;
  $('body, html').animate({scrollTop: destination}, 800);
  }); 
  $('.bot__ancor a').on('click', function(e) {
  e.preventDefault();
  let elementCick = $(this).attr('href'),
    destination = $(elementCick).offset().top;
  $('body, html').animate({scrollTop: destination}, 800); 
  }); 
  





// Animations    

const downArr = [
'.title__left', 
'.title__right', 
'.title__left_ancor', 
'#second > .image-boy', 
'.learn .image-boy', 
'.image',
'#fourth .right'
],
downerArr = [
'.image',
'#fourth .right'
]; 
let scrolled = $(window).scrollTop() || 0,
  downGap = ($(window).height()/3)*2,
  downerGap = ($(window).height()/6),
  sizeCloud = 0,
  sizeLeaf = 0;
  
$(window).on('scroll', e => {
scrolled =  $(window).scrollTop() || 0
$('.title__right').offset().top

addClassesToAnimate(downArr, downerArr)

cloudAndLeafScaling()  
})


function addClassesToAnimate(downTargets, downerTargets) {
downTargets.forEach(el => {
if(scrolled > $(el).offset().top - downGap) {
      $(el).addClass('down')
  }
})
downerTargets.forEach(el => {
  if(scrolled > $(el).offset().top - downerGap) {
    $(el).addClass('downer')
  }
})
}

function cloudAndLeafScaling() {
sizeCloud = scrolled - $('.image').offset().top + $(window).height()
sizeCloud = Math.floor((sizeCloud / 100 * 9.2) * 1.5) / 100 

if(sizeCloud < 1.4 && sizeCloud >= 0) {
  $('.image .bg').css('transform', `scale(${sizeCloud})`)
}

sizeLeaf = scrolled - $('#fourth .right').offset().top + $(window).height()
sizeLeaf = Math.floor((sizeLeaf / 100 * 9.2) * 1.05) / 100 

if(sizeLeaf < 1 && sizeLeaf >= 0) {
  $('#fourth .right .leaf').css('transform', `scale(${sizeLeaf})`)
}
}
  

addClassesToAnimate(downArr, downerArr)









});





