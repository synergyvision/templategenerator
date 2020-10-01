// CAROUSEL

let slider_index = 0;
let carousels = document.querySelectorAll('#slider-container').length;

function show_slide(index,id,side){
    let slides = document.querySelectorAll('.slide-'+id);
    let dots = document.querySelectorAll('.dot-nav-'+id);
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

for (let i=0; i<carousels;i++){
    show_slide(slider_index,i+1);
    document.querySelector('#arrow-prev-'+(i+1)+'').addEventListener('click', ()=>{
      show_slide(--slider_index,i+1,'prev');
  });
  document.querySelector('#arrow-next-'+(i+1)+'').addEventListener('click', ()=>{
      show_slide(++slider_index,i+1,'next');
  });
  document.querySelectorAll('.dot-nav-'+(i+1)+'').forEach((el)=>{
          el.addEventListener('click', function (){
              var dots = Array.prototype.slice.call(this.parentElement.children),
              dot_index = dots.indexOf(el);
              show_slide(slider_index = dot_index, i+1) ;
          })
      });
}
