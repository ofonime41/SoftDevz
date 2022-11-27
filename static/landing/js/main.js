$(function($) {

  "use strict";

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    // Activate menu
    if (wScroll >50) {
      $('.navbar').addClass('active_sc');
    }
    else {
      $('.navbar').removeClass('active_sc');
    };
        
  });

  //smooth scrool
   // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#xenav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });



  // Wait for window load
  $(window).on('load', function() {
     $(".se-pre-con").fadeOut("slow");;
  });





     
    //banner slider
     var owls = $("#banner_three");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        items: 3,
        loop: true,
        center: true,
        margin: 0,
        stagePadding: 0,
        dots:false,
        nav:false,


        merge: false,
        mergeFit: true,
        autoWidth: false,
        animateOut:'fadeOutDown',
        animateIn:'fadeInDown',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            768: {
                items: 3,
                nav: false,
                loop: true
            }
        }
    });

    //logo slider
     var owls = $("#partner-logo");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        items: 7,
        loop: true,
        center: false,
        margin: 40,
        stagePadding: 0,
        dots:false,
        nav:false,


        merge: false,
        mergeFit: true,
        autoWidth: false,
        animateOut:'fadeOutDown',
        animateIn:'fadeInDown',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 4,
                nav: false
            },
            768: {
                items: 7,
                nav: false,
                loop: true
            }
        }
    });

//app preview
     var owls = $("#app_screen");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        items: 7,
        loop: true,
        center: true,
        margin: 40,
        stagePadding: 0,
        dots:false,
        nav:false,


        merge: false,
        mergeFit: true,
        autoWidth: false,
        animateOut:'fadeOutDown',
        animateIn:'fadeInDown',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            768: {
                items: 3,
                nav: false,
                loop: true
            }
        }
    });

//testimonial
     var owls = $("#testi_slider");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        items: 3,
        loop: true,
        center: false,
        margin: 20,
        stagePadding: 0,
        dots:true,
        nav:false,


        merge: false,
        mergeFit: true,
        autoWidth: false,
        animateOut:'fadeOutDown',
        animateIn:'fadeInDown',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            768: {
                items: 3,
                nav: false,
                loop: true
            }
        },
        navText : ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"]

    });


    //counter up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });



});




//wow
wow = new WOW(
              {
              boxClass:     'wow',      // default
              animateClass: 'animated', // default
              offset:       0,          // default
              mobile:       true,       // default
              live:         true,        // default
              offset: 100
            }
            )
         wow.init();

  
  //maps
   function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.674, lng: -73.945},
          zoom: 12,
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });
      }
