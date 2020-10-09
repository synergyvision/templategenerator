$(document).ready(function() {
    $('.logos-container').waypoint(function(direction){
      $('.logos-container').addClass('animated fadeInLeft'); 
  },{offset:'100%;'})
    $('.clients-quote-container').waypoint(function(direction){
      $('.clients-quote-container').addClass('animated fadeInRight'); 
  },{offset:'100%;'})
    $('.us-features').waypoint(function(direction){
      $('.us-features').addClass('animated fadeInRight'); 
  },{offset:'100%;'})
  $('.js-animated-right').waypoint(function(direction){
      $('.js-animated-right').addClass('animated fadeInRight'); 
},{offset:'100%;'})
$('.js-animated-left').waypoint(function(direction){
     $('.js-animated-left').addClass('animated fadeInLeft'); 
},{offset:'100%;'})
$('.us-quote__card').waypoint(function(direction){
    $('.us-quote__card').addClass('animated fadeInLeft'); 
},{offset:'100%;'})
$('.us-quote__card').waypoint(function(direction){
    $('.us-quote__card').addClass('animated fadeInLeft'); 
},{offset:'100%;'})
$('.team-card').waypoint(function(direction){
    $('.team-card').addClass('animated bounceIn'); 
},{offset:'100%;'})
$('.team-card').waypoint(function(direction){
    $('.team-card').addClass('animated bounceIn'); 
},{offset:'100%;'})
$('.blog-card').waypoint(function(direction){
    $('.blog-card').addClass('animated bounceIn'); 
},{offset:'100%;'})
$('.blog-post__article__image').waypoint(function(direction){
    $('.blog-post__article__image').addClass('animated fadeInLeft'); 
},{offset:'100%;'})   
$('.service__post__cite').waypoint(function(direction){
    $('.service__post__cite').addClass('animated fadeInLeft'); 
},{offset:'100%;'})
$('.service__side').waypoint(function(direction){
    $('.service__side').addClass('animated fadeInRight'); 
},{offset:'100%;'})
$('.question-cards-container').waypoint(function(direction){
  $('.question-cards-container').addClass('animated fadeInLeft'); 
},{offset:'100%;'})
$('.team-qualities__sections').waypoint(function(direction){
  $('.progress-bar__content__top__percentage').addClass('animated animatedPercentage'); 
},{offset:'100%;'});

$('.header__title').waypoint(function(direction){
    $('.header__title').addClass('animated fadeInLeft');  
},{offset:'100%;'})

$('.banner-container__svg').waypoint(function(direction){
    $('.banner-container__svg').addClass('animated fadeInRight');  
},{offset:'100%;'})

$('.book__form ').waypoint(function(direction){
    $('.book__form ').addClass('animated fadeInRight');  
},{offset:'100%;'})

$('.us-col__1').waypoint(function(direction){
    $('.us-col__1').addClass('animated fadeInLeft');  
},{offset:'100%;'})

$('.us-col__2').waypoint(function(direction){
    $('.us-col__2').addClass('animated fadeInRight');  
},{offset:'100%;'})

$('.social-box').waypoint(function(direction){
    $('.social-box').addClass('animated fadeInLeft'); 
},{offset:'100%;'})

$('.feature__card').waypoint(
    $('.counter').counterUp({
        time: 4000
    })
)

});



var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    showCursor: false
});