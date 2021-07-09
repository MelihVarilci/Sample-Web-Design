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

const scrollLinks = document.querySelectorAll(".nav-link")
scrollLinks.forEach(scrollLink => {
    scrollLink.addEventListener("click", changeLink)
})

function changeLink(event) {
    clearDarkLink()
    switch (event.target.getAttribute('data-link')) {
        case 'home':
            let homeLinks = document.querySelectorAll(".scroll-link-home")
            homeLinks.forEach(item => {
                $(item).toggleClass('link-dark fw-bold')
            })
            break;
        case 'services':
            let serviceLinks = document.querySelectorAll(".scroll-link-services")
            serviceLinks.forEach(item => {
                $(item).toggleClass('link-dark fw-bold')
            })
            break;
        case 'solutions':
            let solutionsLinks = document.querySelectorAll(".scroll-link-solutions")
            solutionsLinks.forEach(item => {
                $(item).toggleClass('link-dark fw-bold')
            })
            break;
        case 'resources':
            let resourcesLinks = document.querySelectorAll(".scroll-link-resources")
            resourcesLinks.forEach(item => {
                $(item).toggleClass('link-dark fw-bold')
            })
            break;
        case 'the-company':
            let theCompanyLinks = document.querySelectorAll(".scroll-link-the-company")
            theCompanyLinks.forEach(item => {
                $(item).toggleClass('link-dark fw-bold')
            })
            break;
        default:
            break;
    }
    addSecondLink(event.target.getAttribute('data-link'))
}

function clearDarkLink() {
    let homeLinks = document.querySelectorAll(".scroll-link-home")
    homeLinks.forEach(item => {
        item.classList.remove('link-dark', 'fw-bold', 'link-secondary')
    })

    let servicesLinks = document.querySelectorAll(".scroll-link-services")
    servicesLinks.forEach(item => {
        item.classList.remove('link-dark', 'fw-bold', 'link-secondary')
    })

    let solutionsLinks = document.querySelectorAll(".scroll-link-solutions")
    solutionsLinks.forEach(item => {
        item.classList.remove('link-dark', 'fw-bold', 'link-secondary')
    })

    let resourcesLinks = document.querySelectorAll(".scroll-link-resources")
    resourcesLinks.forEach(item => {
        item.classList.remove('link-dark', 'fw-bold', 'link-secondary')
    })

    let theCompanyLinks = document.querySelectorAll(".scroll-link-the-company")
    theCompanyLinks.forEach(item => {
        item.classList.remove('link-dark', 'fw-bold', 'link-secondary')
    })
}

function addSecondLink(event) {
    switch (event) {
        case 'home':
            addClassToClasses(["scroll-link-services", "scroll-link-solutions", , "scroll-link-resources", "scroll-link-the-company"], 'link-secondary')
            break;
        case 'services':
            addClassToClasses(["scroll-link-home", "scroll-link-solutions", , "scroll-link-resources", "scroll-link-the-company"], 'link-secondary')
            break;
        case 'solutions':
            addClassToClasses(["scroll-link-home", "scroll-link-services", , "scroll-link-resources", "scroll-link-the-company"], 'link-secondary')
            break;
        case 'resources':
            addClassToClasses(["scroll-link-home", "scroll-link-services", , "scroll-link-solutions", "scroll-link-the-company"], 'link-secondary')
            break;
        case 'the-company':
            addClassToClasses(["scroll-link-home", "scroll-link-services", , "scroll-link-solutions", "scroll-link-resources"], 'link-secondary')
            break;
        default:
            break;
    }
}


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
            addClassWithMap(["slider-item-mcDonals", "slide-item-mcDonals", "slide-item-text-mcDonalds"], ["active", "bordered", "fw-bold"])
            break;
        case 'mercedes':
            addClassWithMap(["slider-item-mercedesBenz", "slide-item-mercedesBenz", "slide-item-text-mercedes"], ["active", "bordered", "fw-bold"])
            break;
        case 'microsoft':
            addClassWithMap(["slider-item-microsoft", "slide-item-microsoft", "slide-item-text-microsoft"], ["active", "bordered", "fw-bold"])
            break;
        case 'turkishAirlines':
            addClassWithMap(["slider-item-turkishAirlines", "slide-item-turkishAirlines", "slide-item-text-turkishAirlines"], ["active", "bordered", "fw-bold"])
            break;
        default:
            break;
    }
}

function clearSlider() {
    removeClassToClasses(["slider-item-mcDonals", "slider-item-mercedesBenz", "slider-item-microsoft", "slider-item-turkishAirlines"], "active")
}
function clearBorder() {
    removeClassToClasses(["slide-item-mcDonals", "slide-item-mercedesBenz", "slide-item-microsoft", "slide-item-turkishAirlines"], "bordered")
}
function clearTextWeight() {
    removeClassToClasses(["slide-item-text-mcDonalds", "slide-item-text-mercedes", "slide-item-text-microsoft", "slide-item-text-turkishAirlines"], "fw-bold")
}

/********************************/
/****** Array Class Add to Class Function ******/
function addClassToClasses(classes, classToAdd) {
    classes.forEach(className => {
        document.querySelectorAll("." + className).forEach(element => {
            element.classList.add(classToAdd);
        })
    })
}

/********************************/
/****** Array Class Remove to Class Function ******/
function removeClassToClasses(classes, classToRemove) {
    classes.forEach(className => {
        document.querySelectorAll("." + className).forEach(element => {
            element.classList.remove(classToRemove);
        })
    })
}

/********************************/
/****** Array Class Add to Array Class Function ******/
function addClassWithMap(classes, classeToAdds) {
    for (let index = 0; index < classes.length; index++) {
        document.querySelectorAll("." + classes[index]).forEach(element => {
            element.classList.add(classeToAdds[index])
        })
    }
}