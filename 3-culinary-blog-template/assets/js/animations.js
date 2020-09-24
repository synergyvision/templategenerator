$(document).ready(function() {
$('.banner').waypoint(function(direction){
        $('.banner__title').addClass('animated fadeInRight'); 
},{offset:'100%;'});
$('.feature-section__box').waypoint(function(direction){
    $('.feature-section__box').addClass('animated fadeInLeft'); 
},{offset:'120%;'})
});

