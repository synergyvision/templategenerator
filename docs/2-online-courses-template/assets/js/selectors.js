$(document).on('ready', function() {
    /* ============= SIGN UP SELECTOR  =============== */
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
})

function askQuestion(){

    /* ========== REMOVING ASK BUTTON ========== */
    btn = document.getElementsByClassName('btn-ask')[0];
    btn.style.transform='scale(0)';
    btn.style.display='none';
    /* ========== SHOWING BACK BTN ========== */
    btn = document.getElementsByClassName('btn-back')[0];
    btn.style.transform='scale(1)';
    btn.style.display='block';
    /* ========== SHOWING MY QUESTION ========== */
    myQuest = document.getElementsByClassName('questions__info__ask')[0];
    myQuest.style.transform='scale(1)';
    myQuest.style.display='block ';
}

function backtoQuestions(){

     /* ========== SHOWING ASK BUTTON ========== */
     btn = document.getElementsByClassName('btn-ask')[0];
     btn.style.transform='scale(1)';
     btn.style.display='block';
     /* ========== REMOVING BACK BTN ========== */
     btn = document.getElementsByClassName('btn-back')[0];
     btn.style.transform='scale(0)';
     btn.style.display='none';
     /* ========== REMOVING MY QUESTION ========== */
     myQuest = document.getElementsByClassName('questions__info__ask')[0];
     myQuest.style.transform='scale(0)';
     myQuest.style.display='none';
}

function showCourse(id){
   let courses = document.querySelectorAll('.edit-course');
   let currentCourse = document.getElementById(id);
   for(var i = 0; i<courses.length; i++) {
        courses[i].style.transform='scale(0)';
        courses[i].style.display='none';
    }    
    currentCourse.style.transform='scale(1)';
    currentCourse.style.display='block';
}




function showContent(id){
    $('.card-fields-section .content').css('transform', 'scale(0)');
    $('.card-fields-section .content').css('display', 'none');

   $('.card-fields-section .content[id='+id+']').css('transform', 'scale(1)');
   $('.card-fields-section .content[id='+id+']').css('display', 'block');

   $('.card-fields-section .links .link-active').removeClass('link-active');
   $('.card-fields-section .links .link[id='+id+']').addClass('link-active');
}

let activeLink = document.querySelector('.card-fields-section .links .link-active');
let element = document.querySelectorAll('.card-fields-section .links .link')
let content = document.querySelectorAll('.card-fields-section .content');
for(var i = 0; i<content.length; i++) {
    content[i].style.transform='scale(0)';
    content[i].style.display= 'none';
}
let att = activeLink.getAttribute("id");
$('.card-fields-section .content[id='+att+']').css('transform', 'scale(1)');
$('.card-fields-section .content[id='+att+']').css('display', 'block');
for(var i = 0; i<element.length; i++) {
    element[i].onclick = function(e) { 
        var page = e.srcElement.getAttribute("id");
        if(page){
           showContent(page);
        }
        return false;
    }; 
}      

/* =========== SHOWING THE COURSE CONTENT SECTION =========== */
function showCourseContentSection(value){
    let db = $("input:checkbox[value="+value+"]")[0].checked;
       if (db == false){
         $('.section-dropdown[value='+value+']').css('display','none');
       }
       else if ( db == true){
         $('.section-dropdown[value='+value+']').css('display','block');
       }
   }