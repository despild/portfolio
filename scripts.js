$(document).ready(function(){
	$('.contentsHeader').mouseover(function(){
		$(this).css('color','#aaa');
	});
	$('.contentsHeader').mouseout(function(){
		$(this).css('color','#000');
	});

	$('#profile').click(function(){
		if($('#profileContents').css('display')=='none'){
			$('#profileContents').show();
			$('#profileContents').css('color','#000');
			$('#worksContents').hide();
			$('#contactContents').hide();
		}else{
			$('#profileContents').hide();
		}
	});
	$('#works').click(function(){
		if($('#worksContents').css('display')=='none'){
			$('#profileContents').hide();
			$('#worksContents').show();
			$('#worksContents').css('color','#000');
			$('#contactContents').hide();
		}else{
			$('#worksContents').hide();
		}
	});
	$('#contact').click(function(){
		if($('#contactContents').css('display')=='none'){
			$('#profileContents').hide();
			$('#worksContents').hide();
			$('#contactContents').show();
			$('#contactContents').css('color','#000');
		}else{
			$('#contactContents').hide();
		}
	});
	
	
});


//We are using $(window).load here because we want to wait until the images are loaded  
$(window).load(function(){  
    //for each description div...  
    $('div.description').each(function(){  
        //...set the opacity to 0...  
        $(this).css('opacity', 0);  
        //..set width same as the image...  
        $(this).css('width', $(this).siblings('img').width());  
        //...get the parent (the wrapper) and set it's width same as the image width... '  
        $(this).parent().css('width', $(this).siblings('img').width());  
        //...set the display to block  
        $(this).css('display', 'block');  
    });  
  
    $('div.imgWrapper').hover(function(){  
        //when mouse hover over the wrapper div  
        //get it's children elements with class description '  
        //and show it using fadeTo  
        $(this).children('.description').stop().fadeTo(500, 0.7);  
    },function(){  
        //when mouse out of the wrapper div  
        //use fadeTo to hide the div  
        $(this).children('.description').stop().fadeTo(500, 0);  
    });  
  
});  