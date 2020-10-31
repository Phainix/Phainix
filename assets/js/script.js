(function () {
    // Wrap every letter in a span
    var textWrapper = document.querySelector(".fade-in-letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
    );

    anime
        .timeline({ loop: false })
        .add({
            targets: ".fade-in-letters .letter",
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 120 * i,
        })
        .add({
            targets: ".fade-in-letters .letter",
            translateX: [0, -30],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1100,
            delay: (el, i) => 100 + 120 * i,
        });

    setTimeout(function () {
        document.querySelector(".full-loader").classList.add("show");
        setTimeout(function () {
            document.querySelector(".loading-container").classList.add("hide");
            setTimeout(function () {
                // document.querySelector('.loading-container').classList.add('d-none');
            }, 2000);
        }, 6000);
    }, 3000);

    window.addEventListener('load', function(){

        var s = 
        skrollr.init({
            constants: {
                box: '150p'
            }
        });
        
    });
})();
