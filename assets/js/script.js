window.addEventListener('load', function () {

    // Wrap every letter in a span
    // var textWrapper = document.querySelector(".fade-in-letters");
    // textWrapper.innerHTML = textWrapper.textContent.replace(
    //     /\S/g,
    //     "<span class='letter'>$&</span>"
    // );
    // textWrapper.classList.remove('d-none');

    // anime
    //     .timeline({ loop: false })
    //     .add({
    //         targets: ".fade-in-letters .letter",
    //         translateX: [40, 0],
    //         translateZ: 0,
    //         opacity: [0, 1],
    //         easing: "easeOutExpo",
    //         duration: 1200,
    //         delay: (el, i) => 500 + 120 * i,
    //     })
    //     .add({
    //         targets: ".fade-in-letters .letter",
    //         translateX: [0, -30],
    //         opacity: [1, 0],
    //         easing: "easeInExpo",
    //         duration: 1100,
    //         delay: (el, i) => 100 + 120 * i,
    //     });

    setTimeout(function () {
        document.querySelector(".full-loader").classList.add("show");
        setTimeout(function () {
            document.querySelector(".loading-container").classList.add("hide");
        }, 6000);
    }, 500);

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // --- PURPLE/GREEN PANEL ---
    var about = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-container",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
        }
    });

    about.to(".about-slider", {
        x: function (index, target, targets) { //function-based value
            return target.offsetWidth;
        }, ease: "power2",
    })
        .to(".about-desc", { scale: 0.45, transformOrigin: "right center", ease: "power2" }, 0)
        .from(".about-item", { scale: 0.45, ease: "power2", y: 100, opacity: 0 }, 0.1);

    // ScrollTrigger.defaults({
    //     toggleActions: "restart pause resume pause"
    // });

    // gsap.to("#test2 .paperfly", {
    //     scrollTrigger: "#test2",
    //     duration: 2,
    //     rotation: 360
    // });

    // gsap.to("#test3 .content", {
    //     scrollTrigger: {
    //         trigger: "#test3",
    //         toggleActions: "restart pause reverse pause"
    //     },
    //     duration: 1,
    //     backgroundColor: "#FFA500",
    //     ease: "none"
    // });

    // gsap.to("#test4 p", {
    //     scrollTrigger: "#test4",
    //     scale: 2,
    //     repeat: -1,
    //     yoyo: true,
    //     ease: "power2"
    // });

    // gsap.to(".test", {
    //     scrollTrigger: {
    //         trigger: "#test3",
    //         scrub: 1.6,
    //         end: "+=".concat(2 * window.innerHeight),
    //         toggleActions: "restart none nonee"
    //     },
    //     scale: 2,
    //     repeat: -1,
    //     yoyo: true,
    //     ease: "power2"
    // });

    // gsap.from("#test1 .paperfly", {
    //     scrollTrigger: {
    //       trigger: "#test1",
    //       scrub: true,
    //       start: "top bottom",
    //       end: "top top",
    //       pin: true,
    //     },
    //     scaleX: 0,
    //     transformOrigin: "left center", 
    //     ease: "none"
    // });

    // gsap.from("#test2 .paperfly", {
    //     scrollTrigger: {
    //       trigger: "#test2",
    //       scrub: true,
    //       pin: true,
    //       start: "top top",
    //       end: "+=100%"
    //     },
    //     scaleX: 0, 
    //     transformOrigin: "left center", 
    //     ease: "none"
    //   });

    // --- RED PANEL ---
    // gsap.from(".line-1", {
    //     scrollTrigger: {
    //         trigger: ".red",
    //         scrub: true,
    //         pin: true,
    //         start: "top top",
    //         end: "+=100%"
    //     },
    //     scaleX: 0,
    //     transformOrigin: "left center",
    //     ease: "none",
    //     onRepeat: function () {
    //         console.log('starting section 1');
    //     }
    // });

    // gsap.from(".line-2", {
    //     scrollTrigger: {
    //         trigger: ".orange",
    //         scrub: true,
    //         pin: true,
    //         start: "top top",
    //         end: "+=100%"
    //     },
    //     scaleX: 0,
    //     transformOrigin: "left center",
    //     ease: "none"
    // }).eventCallback("onRepeat", function () {
    //     console.log('starting section 2');
    // });


    // --- PURPLE/GREEN PANEL ---
    // var tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".purple",
    //         scrub: true,
    //         pin: true,
    //         start: "top top",
    //         end: "+=100%"
    //     }
    // }).eventCallback("onStart", function () {
    //     console.log('starting section 3');
    // });

    // tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
    //     .from(".line-3", { scaleX: 0, transformOrigin: "left center", ease: "none" }, 0)
    //     .to(".purple", { backgroundColor: "black" }, 0);

    // gsap.from(".line-4", {
    //     scrollTrigger: {
    //         trigger: ".grey",
    //         scrub: true,
    //         pin: true,
    //         start: "top top",
    //         end: "+=100%"
    //     },
    //     scaleX: 0,
    //     transformOrigin: "left center",
    //     ease: "none",
    //     onRepeat: function () {
    //         console.log('starting section 4');
    //     }
    // });

    var navLinks = gsap.utils.toArray("nav.menu a");
    var start = [], end = [], pos = [];
    var max = 0;

    var getElemDistance = function ( elem ) {
        var location = 0;
        if (elem.offsetParent) {
            do {
                location += elem.offsetTop;
                elem = elem.offsetParent;
            } while (elem);
        }
        return location >= 0 ? location : 0;
    };

    function getPosition(element) {
        var xPosition = 0;
        var yPosition = 0;
    
        while(element) {
            xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
            yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
    
        return yPosition;
    }

    navLinks.forEach(function (a, i) {
        start[i] = getPosition(document.querySelector(a.getAttribute("href")));
        end[i] = start[i] + document.querySelector(a.getAttribute("href")).offsetHeight;
        pos[i] = end[i] - 300;
        a.addEventListener("click", function (e) {
            e.preventDefault();
            gsap.to(window, { duration: 1, scrollTo: e.target.getAttribute("href") });
            // console.log(e.target.getAttribute("href"), document.querySelector(e.target.getAttribute("href")).parentNode.offsetHeight);
        });
    });

    console.log(start);
    console.log(end);

    // animate side menu based on section
    gsap.utils.toArray(".test").forEach(function (elem, i) {
        console.log(elem.parentNode.offsetHeight);
        // hide(elem); // assure that the element is hidden when scrolled into view
        // console.log(innerHeight, (i + 1) * innerHeight - innerHeight / 2, document.querySelector('#main-container'));
        // innerHeight = document.querySelector('#main-container').innerHeight / 4;
        // var start = [1790-200, 2765-200, 4860-200, 5835-200];
        // var end = [2765-200, 4860-200, 5835-200, 7785-200];
        ScrollTrigger.create({
            start: pos[i],
            end: pos[i+1] ? pos[i+1] : document.offsetHeight,
            // trigger: "elem",
            markers: true,
            onLeave: () => {
                if (navLinks[i + 1]) {
                   // gsap.to(navLinks[i + 1], { scale: 1.3, color: "white" });
                   navLinks[i + 1].classList.add('active')
                    // gsap.to(navLinks[i], { scale: 1, color: "blue" });
                    navLinks[i].classList.remove('active')
                }
            },
            onEnterBack: () => {
                // gsap.to(navLinks[i], { scale: 1.3, color: "white" });
                navLinks[i].classList.add('active')
                if (navLinks[i + 1]) {
                    // gsap.to(navLinks[i + 1], { scale: 1, color: "blue" });
                    navLinks[i + 1].classList.remove('active')
                }
            },
            // trigger: elem,
            // onEnter: function () { console.log('enter', elem) },
            // onEnterBack: function () {
            //     console.log('enter back', elem);
            //     var id = elem.getAttribute('id');
            //     document.querySelectorAll(`nav.menu a`).forEach(function (nav) {
            //         nav.classList.remove('active');
            //     });
            //     document.querySelector(`nav.menu a[data-nav=${id}]`).classList.add('active')
            // },
            // onLeave: function () {
            //     console.log('leave', elem);
            //     var id = elem.getAttribute('id');
            //     id = parseInt(id.replace('test', ''));
            //     id += 1;
            //     console.log(id);
            //     document.querySelectorAll(`nav.menu a`).forEach(function (nav) {
            //         nav.classList.remove('active');
            //     });
            //     if (document.querySelector(`nav.menu a[data-nav=test${id}]`)) document.querySelector(`nav.menu a[data-nav=test${id}]`).classList.add('active')
            // } // assure that the element is hidden when scrolled into view
        });
    });
});
