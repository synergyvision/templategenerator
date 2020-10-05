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




function showContent(id,contentClass){
    $(contentClass+' .content').css('transform', 'scale(0)');
    $(contentClass+' .content').css('display', 'none');

   $(contentClass+' .content[id='+id+']').css('transform', 'scale(1)');
   $(contentClass+' .content[id='+id+']').css('display', 'block');

   $(contentClass+' .links .link-active').removeClass('link-active');
   $(contentClass+' .links .link[id='+id+']').addClass('link-active');
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