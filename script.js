// SLICK SLIDER
$(document).ready(function(){

    $(".slider-inner").slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        arrow: true,
        dots: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'cubic-bezier(.52,-0.01,.27,.99)'
    });



        // TOGGLE BUTTON
    var toggleBtn = document.querySelector(".toggle");

    // GSAP TIMELINE
    var t1 = gsap.timeline({paused:true});

    t1.to(".toggle span:nth-child(1)",{
        rotate: 45,
        y: 5
    })
    .to(".toggle span:nth-child(2)",{
        rotate: -45,
        y: -5
    })

    .from(".menu-link", {
        scaleY: 0
    })
    .from(".menu-link li",{
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: .145,
    })


    t1.reverse();

    toggleBtn.onclick = function() {
        t1.reversed(!t1.reversed());
    }
});

