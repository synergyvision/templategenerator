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