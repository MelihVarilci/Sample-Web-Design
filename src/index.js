(function () {
    "use strict";

    var carousels = function () {
        $(".owl-carousel1").owlCarousel({
            loop: true,
            center: true,
            // margin: 0,
            responsiveClass: true,
            nav: true,
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                680: {
                    items: 2,
                },
                1000: {
                    items: 3,
                }
            }
        });
    };

    (function ($) {
        carousels();
    })(jQuery);
})();

const sliderButtons = document.querySelectorAll(".checkbox")
sliderButtons.forEach(sliderButton => {
    sliderButton.addEventListener("change", showSlider)
});

function showSlider(event) {
    clearSlider()
    clearBorder()
    clearTextWeight()
    switch (event.target.getAttribute('data-slider')) {
        case 'mcDonalds':
            document.querySelector(".slider-item-mcDonals").classList.toggle('active')
            document.querySelector(".slide-item-mcDonals").classList.toggle('bordered')
            document.querySelector(".slide-item-text-mcDonalds").classList.toggle('fw-bold')
            break;
        case 'mercedes':
            document.querySelector(".slider-item-mercedesBenz").classList.toggle('active')
            document.querySelector(".slide-item-mercedesBenz").classList.toggle('bordered')
            document.querySelector(".slide-item-text-mercedes").classList.toggle('fw-bold')
            break;
        case 'microsoft':
            document.querySelector(".slider-item-microsoft").classList.toggle('active')
            document.querySelector(".slide-item-microsoft").classList.toggle('bordered')
            document.querySelector(".slide-item-text-microsoft").classList.toggle('fw-bold')
            break;
        case 'turkishAirlines':
            document.querySelector(".slider-item-turkishAirlines").classList.toggle('active')
            document.querySelector(".slide-item-turkishAirlines").classList.toggle('bordered')
            document.querySelector(".slide-item-text-turkishAirlines").classList.toggle('fw-bold')
            break;
        default:
            break;
    }
}

function clearSlider() {
    document.querySelector(".slider-item-mcDonals").classList.remove('active')
    document.querySelector(".slider-item-mercedesBenz").classList.remove('active')
    document.querySelector(".slider-item-microsoft").classList.remove('active')
    document.querySelector(".slider-item-turkishAirlines").classList.remove('active')
}
function clearBorder() {
    document.querySelector(".slide-item-mcDonals").classList.remove('bordered')
    document.querySelector(".slide-item-mercedesBenz").classList.remove('bordered')
    document.querySelector(".slide-item-microsoft").classList.remove('bordered')
    document.querySelector(".slide-item-turkishAirlines").classList.remove('bordered')
}
function clearTextWeight() {
    document.querySelector(".slide-item-text-mcDonalds").classList.remove('fw-bold')
    document.querySelector(".slide-item-text-mercedes").classList.remove('fw-bold')
    document.querySelector(".slide-item-text-microsoft").classList.remove('fw-bold')
    document.querySelector(".slide-item-text-turkishAirlines").classList.remove('fw-bold')
}