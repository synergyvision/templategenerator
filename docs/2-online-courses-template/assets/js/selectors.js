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

(function(){
    
    let activeLink = document.querySelector('.profile-card .links .link-active');
    let element = document.querySelectorAll('.profile-card .links .link')
    
    function showContent(id){
        $('.profile-card .content').css('transform', 'scale(0)');
        $('.profile-card .content').css('display', 'none');

       $('.profile-card .content[id='+id+']').css('transform', 'scale(1)');
       $('.profile-card .content[id='+id+']').css('display', 'block');

       $('.profile-card .links .link-active').removeClass('link-active');
       $('.profile-card .links .link[id='+id+']').addClass('link-active');
    }


	window.addEventListener("load", function() {
        $('.profile-card .content').css('transform', 'scale(0)');
        $('.profile-card .content').css('display', 'none');

        let att = activeLink.getAttribute("id");
        $('.profile-card .content[id='+att+']').css('transform', 'scale(1)');
        $('.profile-card .content[id='+att+']').css('display', 'block');
        for(var i = 0; i<element.length; i++) {
            element[i].onclick = function(e) { 
                var page = e.srcElement.getAttribute("id");
                if(page){
                   showContent(page);
                }
                return false;
            }; 
        }      

	});
})();