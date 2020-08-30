//typed effect
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    showCursor: false
});
//counter effect
$(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 10000
    });

//animations
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeInLeft');  
    },{offset:'100%;'})

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInRight');  
    },{offset:'100%;'})
    
});


  // carousel
  let slider_index = 0;

  function show_slide(index,side){
      let slides = document.querySelectorAll('.slide');
      let dots = document.querySelectorAll('.dot-nav');
      if (index >= slides.length) slider_index = 0;
      if (index < 0)  slider_index = slides.length - 1;
      for (let i=0; i<slides.length;i++){
          slides[i].style.display = 'none';
          dots[i].classList.remove('active-dot');
      };
      slides[slider_index].style.display = 'block';
      if (side === 'next')
      slides[slider_index].style.animation = ' fadenext 1s ';
      else 
      slides[slider_index].style.animation = ' fadeprev 1s ';
      dots[slider_index].classList.add('active-dot')
  }
  
  show_slide(slider_index);
  
  document.querySelector('#arrow-prev').addEventListener('click', ()=>{
      show_slide(--slider_index,'prev');
  });
  document.querySelector('#arrow-next').addEventListener('click', ()=>{
      show_slide(++slider_index,'next');
  });
  document.querySelectorAll('.dot-nav').forEach((el)=>{
          el.addEventListener('click', function (){
              var dots = Array.prototype.slice.call(this.parentElement.children),
              dot_index = dots.indexOf(el);
              show_slide(slider_index = dot_index) 
          })
      });
  

    