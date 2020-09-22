$(document).ready(function() {
 
$('.login-card').waypoint(function(direction){
    $('.login-card').addClass('animated bounceIn'); 
},{offset:'100%;'})
$('.banner__box__text').waypoint(function(direction){
    $('.banner__box__text').addClass('animated bounceIn'); 
},{offset:'100%;'})
$('.banner__box__buttons').waypoint(function(direction){
    $('.banner__box__buttons').addClass('animated bounceIn'); 
},{offset:'100%;'})
$('.section-us').waypoint(function(direction){
    $('.section-us').addClass('animated fadeInLeft'); 
},{offset:'100%;'})
$('.feature-box').waypoint(function(direction){
    $('.feature-box').addClass('animated fadeInRight'); 
},{offset:'100%;'});
$('.section-us > *').waypoint(function(direction){
    $('.section-us > *').addClass('animated fadeInLeft'); 
},{offset:'100%;'})
$('.section-contact > .text-side').waypoint(function(direction){
    $('.section-contact > .text-side').addClass('animated fadeInLeft'); 
},{offset:'100%;'})
$('.section-contact > .form-side').waypoint(function(direction){
    $('.section-contact > .form-side').addClass('animated fadeInRight'); 
},{offset:'100%;'})
$('.community-card').waypoint(function(direction){
    $('.community-card').addClass('animated bounceIn'); 
},{offset:'100%;'})
$('.number-box').waypoint(function(direction){
    $('.number-box').addClass('animated bounceIn'); 
},{offset:'100%;'})
$('.about-us__video').waypoint(function(direction){
    $('.about-us__video > .video').addClass('animated fadeInLeft'); 
},{offset:'100%;'})
$('.about-us__video').waypoint(function(direction){
    $('.about-us__video > .text').addClass('animated fadeInRight'); 
},{offset:'100%;'})
$('.about-us__story').waypoint(function(direction){
    $('.about-us__story > .img').addClass('animated bounceIn'); 
},{offset:'100%;'})
});