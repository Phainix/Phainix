window.addEventListener('load', function () {

    document.scrollingElement.scrollTo(0, 0);

    setTimeout(function () {
        document.querySelector(".full-loader").classList.add("show");
        setTimeout(function () {
            document.querySelector(".loading-container").classList.add("hide");
        }, 6000);
    }, 500);

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    function hide(elem) {
        gsap.set(elem, { autoAlpha: 0 });
    }

    function animateFrom(elem, direction) {
        direction = direction | 1;

        var x = 0,
            y = direction * 100;
        if (elem.classList.contains("gs_reveal_fromLeft")) {
            x = -100;
            y = 0;
        } else if (elem.classList.contains("gs_reveal_fromRight")) {
            x = 100;
            y = 0;
        }
        gsap.to(elem, { y: 0, opacity: 1 });
    }

    // --- ABOUT SECTION ---
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
        .from(".about-scale", { scale: 0.45, ease: "power2", y: 100, opacity: 0 }, 0.1);

    // --- SKILLS SECTION ---
    gsap.utils.toArray(".skills-container").forEach(function (section) {
        section.querySelectorAll('.skills-text').forEach(function(skillstext, index) {
            const [x, xEnd] = (index % 2) ? [0, skillstext.scrollWidth * -1] : [0, skillstext.scrollWidth * 1];

            console.log(index, x, xEnd);

            gsap.fromTo(skillstext, {  x  }, {
                x: xEnd,
                scrollTrigger: { 
                    trigger: '.skills-text-right', 
                    scrub: 0.5 
                }
            }, 1.5);
        });

        // ScrollTrigger.create({
        //     trigger: elem,
        //     onEnter: function () { gsap.fromTo(elem, { y: 500, autoAlpha: 1}, { y: 0, autoAlpha: 1, duration: 2, ease: "power3" }); },
        //     // onEnterBack: function () { gsap.fromTo(elem, { y: -100, autoAlpha: 1}, { y: 0, autoAlpha: 1, duration: 2, ease: "power3" }) },
        //     // onLeave: function () { /* hide(elem) */ } // assure that the element is hidden when scrolled into views
        // });
    });

    // var skills = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".skills-container",
    //         scrub: true,
    //         pin: false,
    //         start: "top top",
    //         end: "+=100%"
    //     }
    // });

    // skills.to(".skills-text-left", { x: 200, ease: "power3" })
    //         .to(".skills-text-right", { x: 200, ease: "power3" });

    gsap.to(".works-container", {
        //console.log(innerWidth);
        scrollTrigger: {
            trigger: ".works-container",
            scrub: true,
            pin: true,
            start: "top top",
            end: "+=100%"
        },
        x: -4000,
        transformOrigin: "left middle",
        ease: "none",
        onRepeat: function () {
            console.log('starting section 4');
        }
    });

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

    function getPosition(element) {
        var xPosition = 0;
        var yPosition = 0;

        while (element) {
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
        });
    });

    // animate side menu based on section
    gsap.utils.toArray(".section").forEach(function (elem, i) {
        ScrollTrigger.create({
            start: pos[i],
            end: pos[i + 1] ? pos[i + 1] : document.offsetHeight,
            markers: false,
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
            }
        });
    });
});
