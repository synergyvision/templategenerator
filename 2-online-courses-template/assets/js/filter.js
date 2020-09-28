
$(document).ready(function(){

		/* =========== FILTER TABLE STUDENTS =========== */
		  $("#myInput").on("keyup", function() {
		   var value = $(this).val().toLowerCase();
		   $("#contentTable tr").filter(function() {
			 $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		   });
		 });

});