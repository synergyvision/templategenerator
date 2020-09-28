$(document).ready(function() {
$('.banner').waypoint(function(direction){
        $('.banner__title').addClass('animated fadeInRight'); 
},{offset:'100%;'});
$('.feature-section').waypoint(function(direction){
    $('.feature-section__box').addClass('animated fadeInLeft'); 
},{offset:'100%;'})
$('.quote-section').waypoint(function(direction){
    $('.quote-card').addClass('animated fadeInLeft'); 
},{offset:'120%;'})
$('.newsletter-card').waypoint(function(direction){
    $('.newsletter-card').addClass('animated fadeInRight'); 
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
