$(document).ready(function() {
    $("#Slider1").responsiveSlides({
        auto: true,
        pause: true,
		controller: true,
        speed: 1000,
        timeout: 8000,
		 nav: true,
		autoplayslider: true,
        pauseControls: true,
        namespace: 'Banner',
        manualControls: '.Banner-Tabs'
    });
	$("#Slider2").responsiveSlides({
        auto: true,
        pause: true,
		controller: true,
        speed: 500,
		 nav: true,
		autoplayslider: true,
        pauseControls: true,
        namespace: 'Banner2',
        manualControls: '.Banner-Tabs2'
    });
    $("#Slider3").responsiveSlides({
        auto: true,
        pause: true,
		controller: true,
        speed: 500,
		 nav: true,
		autoplayslider: true,
        pauseControls: true,
		namespace: 'Banner3',
        manualControls: '.Banner-Tabs3'
    });
   
    $("#doctors10").responsiveSlides({
        auto: true,
        pause: true,
		controller: true,
        speed: 500,
		 nav: true,
		autoplayslider: true,
        pauseControls: true,
		namespace: 'Banner4',
        manualControls: '.Banner-Tabs4'
    });
    
    
    
    
    
    
    
    
	$("#flexisel1").flexisel({
		visibleItems:4,
		animationSpeed: 1500,
		autoPlay: true,
		autoPlaySpeed: 6000,
		pauseOnHover: true,
        clone : false,
		enableResponsiveBreakpoints: true,
		responsiveBreakpoints: {
			portrait: {
				changePoint:480,
				visibleItems: 1
			}, landscape: {
				changePoint:700,
				visibleItems: 2
			}, phablet: {
				changePoint:800,
				visibleItems: 3
			}, tablet: {
				changePoint:975,
				visibleItems: 3
			}
		}
	});
    
    $("#flexisel2").flexisel({
		visibleItems:4,
		animationSpeed: 1500,
		autoPlay: true,
		autoPlaySpeed: 6000,
		pauseOnHover: true,
        clone : false,
		enableResponsiveBreakpoints: true,
		responsiveBreakpoints: {
			portrait: {
				changePoint:480,
				visibleItems: 1
			}, landscape: {
				changePoint:700,
				visibleItems: 2
			}, phablet: {
				changePoint:800,
				visibleItems: 3
			}, tablet: {
				changePoint:975,
				visibleItems: 3
			}
		}
	});
    
        $("#flexisel4").flexisel({
		visibleItems:3,
		animationSpeed: 4000,
		autoPlay: true,
		autoPlaySpeed: 6000,
		pauseOnHover: true,
        clone : true,
		enableResponsiveBreakpoints: true,
		responsiveBreakpoints: {
			portrait: {
				changePoint:767,
				visibleItems: 1
			}, landscape: {
				changePoint:770,
				visibleItems: 2
			}, phablet: {
				changePoint:801,
				visibleItems: 2
			}, tablet: {
				changePoint:975,
				visibleItems: 2
			}
		}
	});
    
      $("#flexisel5").flexisel({
		visibleItems:3,
		animationSpeed: 4000,
		autoPlay: true,
		autoPlaySpeed: 6000,
		pauseOnHover: true,
        
		enableResponsiveBreakpoints: true,
		responsiveBreakpoints: {
			portrait: {
				changePoint:767,
				visibleItems: 1
			}, landscape: {
				changePoint:770,
				visibleItems: 2
			}, phablet: {
				changePoint:801,
				visibleItems: 2
			}, tablet: {
				changePoint:975,
				visibleItems: 2
			}
		}
	});
    
   
    
    
    marqueeInit({
   uniqueid : 'mycrawler',
   style : {
   	//'padding': '5px',
   	'width': '100%',
   	'background' : 'transparent',
   	'border' : 'none'
   },
   inc : 8, //speed - pixel increment for each iteration of this marquee's movement
   mouse : 'cursor driven', //mouseover behavior ('pause' 'cursor driven' or false)
   moveatleast : 2,
   neutral : 850,
   savedirection : true
   });
    
    
     /* ----- ada-header-form  ----- */
    
    if ($("body").hasClass("accessible_on")) { 
    $( "#myModal" ).remove();
    $("#myBtn a").attr("href", "appointment-houston-mri.html");    
    }
    
    /* ----- ada-header-form-end  ----- */   
    
    

    
    
});
/* ----- Target URL JS ----- */
$(window).load(function() {
    var current_id = window.location.href.split('#').pop();
    $('html, body').animate({
        scrollTop: $('#' + current_id).offset().top
    }, 900);
});
$(document).ready(function(){     
   $('.lang-select').click(function() {
   var theLang = $(this).attr('data-lang');
   $('.goog-te-combo').val(theLang);
   //alert($(this).attr('href'));
   window.location = $(this).attr('href');
   location.reload();
   });
});
function googleTranslateElementInit() {
     new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element');
   }
function triggerHtmlEvent(element, eventName) {
   var event;
   if (document.createEvent) {
   event = document.createEvent('HTMLEvents');
   event.initEvent(eventName, true, true);
   element.dispatchEvent(event);
   } else {
   event = document.createEventObject();
   event.eventType = eventName;
   element.fireEvent('on' + event.eventType, event);
   }
}
	
