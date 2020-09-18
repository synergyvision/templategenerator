function askQuestion(){
    /* ========== REMOVING QUESTIONS ========== */
    elements = document.getElementsByClassName('card-cont');
    for(var i = 0; i<elements.length; i++) {
        elements[i].style.transform='scale(0)';
        elements[i].style.display='none';         
     }
    /* ========== REMOVING ASK BUTTON ========== */
    btn = document.getElementsByClassName('btn-ask')[0];
    btn.style.transform='scale(0)';
    btn.style.display='none';
    /* ========== REMOVING PAGINATION ========== */
    pagination = document.getElementsByClassName('pagination')[0];
    pagination.style.transform='scale(0)';
  //  pagination.style.display='none';
    /* ========== SHOWING BACK BTN ========== */
    btn = document.getElementsByClassName('btn-back')[0];
    btn.style.transform='scale(1)';
    btn.style.display='block';
    /* ========== SHOWING MY QUESTION ========== */
    myQuest = document.getElementsByClassName('questions__info__ask')[0];
    myQuest.style.transform='scale(1)';
    myQuest.style.display='block';
}

function backtoQuestions(){
     /* ========== SHOWING QUESTIONS ========== */
     elements = document.getElementsByClassName('card-cont');
     for(var i = 0; i<elements.length; i++) {
         elements[i].style.transform='scale(1)';
         elements[i].style.display='block';         
      }
     /* ========== SHOWING ASK BUTTON ========== */
     btn = document.getElementsByClassName('btn-ask')[0];
     btn.style.transform='scale(1)';
     btn.style.display='block';
     /* ========== SHOWING PAGINATION ========== */
     pagination = document.getElementsByClassName('pagination')[0];
     pagination.style.transform='scale(1)';
     //pagination.style.display='block';
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