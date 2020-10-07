/* ============  INDEX ============ */
    $(".index-hamburger").click(function(){
    $(".index").toggleClass("active")
    })
    /* =========== SEARCH INPUT =========== */
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
    
      /* =========== SELECTOR =========== */
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
      
    
    
    
    
    
    /* =========== ON PAGE LINKS =========== */
    /*
      $('a[href*="#"]')
      /* =========== Remove links that don't actually link to anything =========== 
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
    
    */
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
    
      let link = document.querySelectorAll('.card-cont');
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

    
