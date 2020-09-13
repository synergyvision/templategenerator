
/* ============= SIGN UP SELECTOR  =============== */
$(document).on('ready', function() {


  $(".a-1").click(function(){
     $('.a-1').addClass('active-btn');
     $('.a-2').removeClass('active-btn');
     $('.content-2').removeClass('show-content');
     $('.content-2').addClass('hide-content');
     $('.content-1').removeClass('hide-content');
     $('.content-1').addClass('show-content');
   });
   $(".a-2").click(function(){
     $('.a-2').addClass('active-btn');
     $('.a-1').removeClass('active-btn');
     $('.content-1').removeClass('show-content');
     $('.content-1').addClass('hide-content');
     $('.content-2').removeClass('hide-content');
     $('.content-2').addClass('show-content');
   });
 
 
 });
// search input
$(document).on('ready', function() {
  $('.field').on('focus', function() {
    $('body').addClass('is-focus');
  });
  
  $('.field').on('blur', function() {
    $('body').removeClass('is-focus is-type');
  });
  
  $('.field').on('keydown', function(event) {
    $('body').addClass('is-type');
    if((event.which === 8) && $(this).val() === '') {
      $('body').removeClass('is-type');
    }
  });
  
});

// Selector 


x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}


function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
  


// Carousel

let slider_index = 0;
let carousels = document.querySelectorAll('#slider-container').length;

function show_slide(index,index,side){
    let slides = document.querySelectorAll('.slide-'+index);
    let dots = document.querySelectorAll('.dot-nav-'+index);
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
  console.log(i+1);
    show_slide(slider_index,i+1);
}


document.querySelector('#arrow-prev-1').addEventListener('click', ()=>{
    show_slide(--slider_index,1,'prev');
});
document.querySelector('#arrow-next-1').addEventListener('click', ()=>{
    show_slide(++slider_index,1,'next');
});
document.querySelectorAll('.dot-nav-1').forEach((el)=>{
        el.addEventListener('click', function (){
            var dots = Array.prototype.slice.call(this.parentElement.children),
            dot_index = dots.indexOf(el);
            show_slide(slider_index = dot_index, 1) ;
        })
    });

    document.querySelector('#arrow-prev-2').addEventListener('click', ()=>{
      show_slide(--slider_index,2,'prev');
    });
    document.querySelector('#arrow-next-2').addEventListener('click', ()=>{
        show_slide(++slider_index,2,'next');
    });
    document.querySelectorAll('.dot-nav-2').forEach((el)=>{
            el.addEventListener('click', function (){
                var dots = Array.prototype.slice.call(this.parentElement.children),
                dot_index = dots.indexOf(el);
                show_slide(slider_index = dot_index, 2) ;
            })
    });



// On-page links

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /* ========== ONLINE COURSES TEMPLATE ============== */

  /* ===== CHECKS ===== */


  function selectOnlyThis(id,start,finish,filterId,value) {
    for (var i = start;i <= finish; i++)
    {
        document.getElementById(i).checked = false;
    }
    document.getElementById(id).checked = true;

    var selected = new Array();
        
    $("input:checkbox:checked").each(function() {
       selected.push($(this).attr("id"));
      
    });
   showProduct(filterId,value);
}
 let array2 = "hola";
function showCourses(name){
  let array = [];

  const rbs = document.querySelectorAll('input[name='+name+']');
  let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
          
          array.push({name: name, value: selectedValue});
  window.alert(name+'---'+selectedValue);
  console.log(array);
  console.log(array2);
  //console.log(array2);
  //console.log(this.array2);
  let link = document.querySelectorAll('.card-cont');
  console.log(link);
  $('.card-cont').css('transform', 'scale(0)');
  $('.card-cont').hide();
    if (link) {
        let duration = link[0].getAttribute('duration');
        let price = link[0].getAttribute('price');
        let score = link[0].getAttribute('score');
        let language = link[0].getAttribute('language');
        let id = link[0].getAttribute('identifier');
      $('.card-cont[identifier='+id+']').show(); 
      $('.card-cont[identifier='+id+']').css('transform', 'scale(1)'); 
    }
}

function hideProduct(){
  $('.card-cont').hide();
} 
function showProduct(filterId, value){
        
        $('.card-cont').css('transform', 'scale(0)');
        $('.card-cont').hide();
      
        $('.card-cont['+filterId+'='+value+']').show();
        $('.card-cont['+filterId+'='+value+']').css('transform', 'scale(1)');

} 

//setTimeout(showProduct,400);