// =========================== medicine-brand-carousel Start ======================
var owl = $('.medicine-brand-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:50,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },

        768:{
            items:3
        },
       
        1024:{
            items:2
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});
// =========================== medicine-brand-carousel End ======================

// =========================== why_choose_us_carousel Start ======================
var owl = $('.why_choose_us_carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav: true,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});
// =========================== why_choose_us_carousel End ======================

// =========================== Testimonials Start ======================
var owl = $('.testimonials-row');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },

        768:{
            items:2
        },
        1024:{
            items:3
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});
// =========================== why_choose_us_carousel End ======================

// =========================== Product Listing Start ======================
var owl = $('.product-container-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },

        768:{
            items:2
        },
        1024:{
            items:3
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});
// =========================== why_choose_us_carousel End ======================