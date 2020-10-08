$(document).ready(function() {
$('.header').waypoint(function(direction){
        $('.header__logo').addClass('animated fadeInLeft'); 
},{offset:'120%;'})
$('.banner').waypoint(function(direction){
        $('.banner__title').addClass('animated fadeInRight'); 
},{offset:'100%;'});
$('.feature-section').waypoint(function(direction){
    $('.stripe__icon').addClass('animated fadeInLeft'); 
    $('.feature-section__box').addClass('animated fadeInRight'); 
},{offset:'100%;'})
$('.quote-section').waypoint(function(direction){
    $('.quote-card').addClass('animated fadeInLeft'); 
},{offset:'120%;'})
$('.newsletter-card').waypoint(function(direction){
    $('.newsletter-card').addClass('animated fadeInRight'); 
},{offset:'120%;'})
$('.course-section').waypoint(function(direction){
    $('.video-wrapper').addClass('animated fadeInLeft'); 
},{offset:'120%;'})


$('.recipe-box').waypoint(function(direction){
    $('.recipe-box').addClass('animated jackInTheBox'); 
},{offset:'120%;'})
$('.filter-box').waypoint(function(direction){
    $('.filter-box').addClass('animated jackInTheBox'); 
},{offset:'120%;'})
});

var btn = $('#top-button');
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
    
btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});
