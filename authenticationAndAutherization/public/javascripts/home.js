// Initialize the GSAP timeline
var tl = gsap.timeline();

// Animate the main heading
tl.from("#main h1", {
    delay: 0.4,
    opacity: 0,
    duration: 0.4,
    scale: 0.2
});

// Animate images in the main section
tl.from("#img1", {
    opacity: 0,
    duration: 0.6,
    y: 60
}, "-=0.4"); // overlaps with the previous animation
tl.from("#img2", {
    opacity: 0,
    duration: 0.6,
    x: 60
}, "-=0.4"); // overlaps
tl.from("#img3", {
    opacity: 0,
    duration: 0.6,
    y: -60
}, "-=0.4"); // overlaps

// Page 2 animations
gsap.from("#page2 h5, #page2 h1, #page2 #about-us", {
    opacity: 0,
    stagger: 0.4,
    duration: 0.6,
    scrollTrigger: {
        trigger: "#page2",
        start: "top 60%",
        toggleActions: "play none none reverse", // play on enter, reverse on leave
        markers: false // set to true if you want to see markers for debugging
    }
});

// Page 3 animations
gsap.from("#page3 h1, #page3 h2, #page3 p, #page3 ul", {
    opacity: 0,
    y: 40,
    stagger: 0.3,
    duration: 0.6,
    scrollTrigger: {
        trigger: "#page3",
        start: "top 60%",
        toggleActions: "play none none reverse"
    }
});

// Partners section animations
gsap.from("#partners h1", {
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 0.6,
    scrollTrigger: {
        trigger: "#partners",
        start: "top 60%",
        // toggleActions: "play none none reverse"
    }
});

// Footer animations
gsap.from("#footer", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    scrollTrigger: {
        trigger: "#footer",
        start: "top 90%",
        // toggleActions: "play none none reverse"
    }
});

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});