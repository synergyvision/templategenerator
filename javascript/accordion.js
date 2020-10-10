(function(){
	let accordionItems = document.querySelectorAll('.accordionTrigger');
 changeItem = function(e) {
        e.preventDefault();
        var itemHeader = e.target;
        var itemContent = e.target.parentNode.nextElementSibling;
        if(itemContent.classList.contains('is-collapsed')) {
           itemHeader.setAttribute('aria-expanded', 'true');
           itemContent.setAttribute('aria-hidden', 'false');
        } else {
            itemHeader.setAttribute('aria-expanded', 'false');
            itemContent.setAttribute('aria-hidden','true');
        }
        itemHeader.classList.toggle('is-collapsed');
        itemHeader.classList.toggle('is-expanded');
            itemContent.classList.toggle('is-collapsed');
            itemContent.classList.toggle('is-expanded');
        
        itemContent.classList.toggle('animateIn');
 };
	for (var i=0,len=accordionItems.length; i<len; i++) {
        accordionItems[i].addEventListener('click', changeItem, false);
    }
})();