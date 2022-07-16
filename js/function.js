$(function(){

		
	$(window).scroll(function(){
		var windowOffY = $(window).scrollTop();
		var windowHeight = $(window).height();
		$('.sessao').each(function(){
			var elOffY = $(this).offset().top;
			if(elOffY+30 < (windowOffY + windowHeight) && 
				elOffY+30+$(this).height() > windowOffY){
				   $(".header-disney").fadeIn();
               
                
			}
		});
        var windowOffY = $(window).scrollTop();
		var windowHeight = $(window).height();
       $('.button-assine-oferta').each(function(){
			var elOffY = $(this).offset().top;
			if(elOffY+30 < (windowOffY + windowHeight) && 
				elOffY+30+$(this).height() > windowOffY){
				   $(".header-disney").fadeOut();
                   
               
                
			}
		});

  
	})



	// slideToggle section perguntas frequentes//

	function slideToggle(){
		$(".perguntas-frequentes-wraper").click(function(){
			$(".resposta-perguntas-frequentes").slideToggle();
			$(".resposta-perguntas-frequentes").css("display", "inline-block");
			
		})

		$(".perguntas-frequentes-wraper2").click(function(){
			$(".resposta-perguntas-frequentes2").slideToggle();
			$(".resposta-perguntas-frequentes2").css("display", "inline-block");
			
		})

		$(".perguntas-frequentes-wraper3").click(function(){
			$(".resposta-perguntas-frequentes3").slideToggle();
			$(".resposta-perguntas-frequentes3").css("display", "inline-block");
		})

	}

	

	
	

		



	slideToggle();
	


});