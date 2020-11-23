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

    var about = function() {
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
    };

    var skills = function() {
        // --- SKILLS SECTION ---
        gsap.utils.toArray(".skills-container").forEach(function (section) {
            section.querySelectorAll('.skills-text').forEach(function(skillstext, index) {
                const [x, xEnd] = (index % 2) ? [0, skillstext.scrollWidth * -1] : [0, skillstext.scrollWidth * 1];

                gsap.fromTo(skillstext, {  x  }, {
                    x: xEnd,
                    scrollTrigger: { 
                        trigger: '.skills-text-right', 
                        scrub: 0.5 
                    }
                }, 1.5);
            });
        });
    };

    var works = function() {
        gsap.utils.toArray(".work-item").forEach(function (item) {
            var work_display = parseInt(item.querySelector(".work-display").offsetHeight),
                work_img = parseInt(item.querySelector(".work-img").offsetHeight)
                ;
            gsap.to(item.querySelector(".work-img"), {
                scrollTrigger: {
                    trigger: item,
                    scrub: true,
                    pin: false,
                    start: "top bottom",
                    end: "+=100%"
                },
                y: work_display - work_img < 0 ? work_display - work_img : 0,
                ease: "none"
            });
        });
    };

    function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
        var mql = window.matchMedia(mediaQuery);
        mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
        layoutChangedCallback(mql.matches);
    }

    installMediaQueryWatcher("(min-width: 700px)", function(matches) {
  
        if (matches) {
            about();
            skills();
            works();
        }
    });


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
        pos[i] = end[i] - (300 * i);
        a.addEventListener("click", function (e) {
            e.preventDefault();
            gsap.to(window, { duration: 1, scrollTo: e.target.getAttribute("href") });
        });
    });

    console.log(pos);

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
