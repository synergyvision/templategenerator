(function(){

    pages = document.querySelectorAll("#page-btn");
    elements = document.getElementsByClassName('card-cont');
    max_results = elements.length;
	no_of_pages = Math.ceil( max_results / config.max_per_page );
    
    function init(){ 
        update_page();
        document.getElementById("next").onclick = function() { 
			pager("next");
			return false;
		};
		document.getElementById("prev").onclick = function() { 
			pager("prev"); 
			return false;
		};
        for(var i = 0; i<pages.length; i++) {
            pages[i].onclick = function(e) { 
                var page = e.srcElement.getAttribute("page");
                if(page){
                    pager("goto", page);
                }
                return false;
            }; 
        }        
    }

    function pager(action, page) {
       
		switch (action) {
            case "next":
				if( (config.page + 1) <= no_of_pages ){ 
					++config.page;
				}
				break; 
			case "prev":
				if( (config.page - 1) >= 1 ){
					 --config.page;
				}
				break;
			case "goto":
				config.page = page;
				break;
			default:
				break;
		}
		update_page();
	}

    function update_page(){
		if (config.scroll == true){
            $("html, body").animate({ scrollTop: 0 }, 600);
        }    
        $('.card-cont').css('transform', 'scale(0)');
        $('.card-cont').css('display', 'none');
        let finish = config.page*config.max_per_page;
        let start = finish - config.max_per_page;
        finish= finish -1;
        
        for(var i = start; i<=finish; i++) {
           elements[i].style.transform='scale(1)';
           elements[i].style.display='block';         
        }
	}


    for(var i = 0; i<pages.length; i++) {
        pages[i].onclick = function(e) { 
            var page = e.srcElement.getAttribute("page");
            if(page){
                pager("goto", page);
            }
            return false;
        }; 
    }      

	window.addEventListener("load", function() {
        init();     
	});
})();

