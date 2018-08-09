//Responsive menu ikon
	$(".menu-icon").click(function(){ 

		$(this).children().toggle();
		
	});



/*Funktion - Register*/

$("#btnRegister").click(function(){
		var namn = $("#txtNamn").val();
		$("#txtNamn").val(""); //clears the input text field
		var adress = $("#txtAdress").val();
		$("#txtAdress").val("");
		var mobil = $("#txtMobil").val();
		$("#txtMobil").val("");
		var epost = $("#txtEpost").val();
		$("#txtEpost").val("");
		var anvandarnamn = $("#txtAnvandarnamn").val();
		$("#txtAnvandarnamn").val("");
		var losenord = $("#txtLosenord").val();
		$("#txtLosenord").val("");



		$("#registerOutput p#namn").html("<p>Namn: " + namn + "</p>");
		$("#registerOutput p#adress").html("<p>Adress: " + adress + "</p>");
		$("#registerOutput p#mobil").html("<p>Mobil: " + mobil + "</p>");
		$("#registerOutput p#epost").html("<p>Epost: " + epost + "</p>");
		$("#registerOutput p#anvandarnamn").html("<p>Användarnamn: " + anvandarnamn + "</p>");
		$("#registerOutput p#losenord").html("<p>Lösenord: " + losenord + "</p>");

		$("#registerOutput").toggle();
		
	});

/*Funktion - Kontakt*/

$("#btnKontakt").click(function(){
		var namn = $("#knamn").val();
		$("#knamn").val(""); //clears the input text field
		var epost = $("#kepost").val();
		$("#kepost").val("");
		var message = $("#kmessage").val();
		$("#kmessage").val("");



		$("#kontaktOutput p#knamn").html("<p>Namn: " + namn + "</p>");
		$("#kontaktOutput p#kepost").html("<p>Epost: " + epost + "</p>");
		$("#kontaktOutput p#kmessage").html("<p>Er meddelande: " + message + "</p>");
		
		$("#kontaktOutput").toggle();
		
	});

/*The function for bilder-page*/

(function($){
	//if($(window).width() >= 900){

	$("#bilder img").click(function(){

		
			
			var source = $(this).attr("src");


			$("#fade").show();
	        $("#chosen").attr("src", source);


			$("#modal").show();
	        
		   });

	        $("#modal img#close").click(function(){
	            
	            $("#modal").hide();
	 
	            $("#fade").hide();
	     
	});
	//}
       
})(jQuery);


//Funktion - toggle-button
$(document).ready(function() {

	var $toggleButton = $(".toggle-button"),
    	$menuWrap = $(".menu-wrap"),
    	$sidebarArrow = $('.sidebar-menu-arrow');

	// menu icon

	$toggleButton.on("click", function() {
		$(this).toggleClass("button-open");
		$menuWrap.toggleClass("menu-show");
	});

	// Sidebar navigation arrows

	$sidebarArrow.click(function() {
		$(this).next().slideToggle(300);
	});

});

/*Change background color to dark grey during scroll*/
jQuery(window).scroll(function(){
    if($(window).scrollTop() > 50) {
        $("#headerwrap").css("backgroundColor","#292929");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#headerwrap").css("backgroundColor","transparent");
    }
});

