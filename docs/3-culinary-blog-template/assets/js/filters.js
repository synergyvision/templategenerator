
    $('[data-search]').on('keyup', function() {
        var searchVal = $(this).val();
        var filterItems = $('[data-filter-item]');   
        if ( searchVal != '' ) {
            document.querySelector('input[name="bread-type"][value="all"]').checked=true;
            filterItems.addClass('hidden');
            $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
            var lenght = $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').length;
            showEmptyMessage(lenght);
            max_results = 2;
        } else {
            $('.empty-message').addClass('hidden');
            filterItems.removeClass('hidden');
        }
    });
    
    var inputRadio = $('input[name="bread-type"]');
    
    function showEmptyMessage(lenght){
        if (lenght == 0){
                $('.empty-message').removeClass("hidden");
            }
            else{
                $('.empty-message').addClass('hidden');
            }
    }
    
    for (var i=0;i<inputRadio.length;i++){
       inputRadio[i].addEventListener('change', function(){
        var filterItems = $('[data-filter-item]');  
        var input = document.querySelector("[data-search]");
        $('.empty-message').addClass('hidden');
        input.value= ""
           if (this.checked){
            filterItems.addClass('hidden');
            if (this.value.toLowerCase() !== 'all'){
                $('[data-filter-item][data-filter-type*="' + this.value.toLowerCase() + '"]').removeClass('hidden');
                let lenght = $('[data-filter-item][data-filter-type*="' + this.value.toLowerCase() + '"]').length;
                showEmptyMessage(lenght);
            }
            else        
                filterItems.removeClass('hidden');
           }
       })
    }
    
    $( ".filter-table__input" ).focusin(function() {
      $( this ).find( "span" ).animate({"opacity":"0"}, 200);
    });
    
    $( ".filter-table__input" ).focusout(function() {
      $( this ).find( "span" ).animate({"opacity":"1"}, 300);
    });