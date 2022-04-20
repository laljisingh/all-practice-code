		$(document).ready(function(){
			// $('h1').click(function(){
			// 	console.log("You clicked on H1",this);

			// });	

			$("h1").mouseout(function(){
				$("h1").css("color", "orange");
			 });

			 $("h1").mouseenter(function(){
				$("#sec").css("color", "green");
			 });



/*					// $('h1').click();
		$('h1').click(
			function(){
		console.log("we arer using jquery");
				$(this).hide();
			});	*/		
		})