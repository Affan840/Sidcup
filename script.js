gsap.to(".nav", {
    backgroundColor: "black",
    opacity: 1,
    height: "100px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.to("#main", {
    backgroundColor: "black",
    opacity: 1,
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 1
    }
})
let crsr = document.querySelector("#cursor");
let crsrblur = document.querySelector("#cursor-blur");

window.addEventListener("mousemove", function (e) {
    gsap.to(crsr, { duration: 0.2, left: e.x, top: e.y, ease: "power2.out" });
});

window.addEventListener("mousemove", function (e) {
    gsap.to(crsrblur, { duration: 0.2, left: e.x - 150, top: e.y - 150, ease: "power2.out" });
});

function mouseEnter(e) {
    crsr.style.width = "80px";
    crsr.style.height = "80px";
    crsr.style.backgroundColor = "transparent";
    crsr.style.border = "solid white";
    crsr.style.borderWidth = "0.1rem";
}
function mouseOut(e) {
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.backgroundColor = "#95C11E";
    crsr.style.border = "none";
    crsr.style.borderWidth = "0rem";
}

let scrollBtn = document.querySelector(".scrollBtn");
let nav = document.querySelector(".inner").children;
Array.from(nav).forEach((e) => {
    e.addEventListener("mouseenter", mouseEnter);
    e.addEventListener("mouseout", mouseOut);
    e.addEventListener("mouseover", () => {
        var scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            document.querySelector(".nav").style.zIndex = 11;
            e.style.color = "#95C11E";
            crsr.style.zIndex = 1111;
        }
    });

    e.addEventListener("mouseleave", () => {
        var scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            crsr.style.zIndex = 99;
            e.style.color = "white";
        }
    });

});
scrollBtn.addEventListener("mouseenter", mouseEnter);
scrollBtn.addEventListener("mouseout", mouseOut);

let cards = document.querySelectorAll(".cards");
let overlay = document.querySelectorAll(".overlay");
cards.forEach(e => {
    e.addEventListener("mouseenter", mouseEnter);
    e.addEventListener("mouseout", mouseOut);

})

overlay.forEach(e => {
    e.addEventListener("mouseover", mouseEnter);
    e.addEventListener("mouseleave", mouseOut);
})

var cardsContainer = document.getElementById('cards-container');

window.addEventListener('mousemove', function (e) {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    cards.forEach(function (card) {
        var cardRect = card.getBoundingClientRect();
        var xAxis = (e.clientX - cardRect.width) / 300;
        var yAxis = (e.clientY - cardRect.height) / 300;

        card.style.transform = 'rotateX(' + (yAxis * 5) + 'deg) rotateY(' + (xAxis * 5) + 'deg)';
    });
});

window.addEventListener('mouseout', function () {
    cards.forEach(function (card) {
        card.style.transform = 'rotateX(0) rotateY(0)';
    });
});

const swiper = new Swiper('.swiper', {
    loop: true,                        //loop
    autoplay: {                         //autoplay
        delay: 5000,
    },
    pagination: {                       //pagination(dots)
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {                       //navigation(arrows)
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: 'fade',                     // Fade effect
    fadeEffect: {
        crossFade: true
    }
})
const swiper2 = new Swiper('.swiper2', {
    loop: true,                        //loop
    autoplay: {                         //autoplay
        delay: 10000,
    },
    pagination: {                       //pagination(dots)
        el: '.swiper-pagination2',
    },
    navigation: {                       //navigation(arrows)
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    effect: 'fade',                     // Fade effect
    fadeEffect: {
        crossFade: true
    }
})

gsap.from(".first-colon", {
    x: -30,
    y: -30,
    scrollTrigger: {
        trigger: ".first-colon",
        scroller: "body",
        start: "top 45%",
        end: "top 55%",
        scrub: 2,
    }
})
gsap.from(".second-colon", {
    x: 30,
    y: 30,
    scrollTrigger: {
        trigger: ".first-colon",
        scroller: "body",
        start: "top 45%",
        end: "top 55%",
        scrub: 2,
    }
})
let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach(function (e) {
    e.addEventListener("mouseenter", function (e) {
        document.querySelector(".bg-text span").style.textShadow = "-1px -1px 0 #95C11E, 1px -1px 0 #95C11E, -1px 1px 0 #95C11E, 1px 1px 0 #95C11E"
    })
    e.addEventListener("mouseleave", function (e) {
        document.querySelector(".bg-text span").style.textShadow = "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff"
    })
})

Array.from(boxes).forEach(e => {
    e.addEventListener("mouseover", mouseEnter);
    e.addEventListener("mouseleave", mouseOut);
})

let lis = document.querySelectorAll(".footer li");
lis.forEach(function (e) {
    e.style.cursor = "pointer";
    e.addEventListener("mouseover", mouseEnter);
    e.addEventListener("mouseleave", mouseOut);
})

gsap.from(".bg-text span", {
    y: 110,
    scrollTrigger: {
        trigger: ".bg-text",
        scroller: "body",
        start: "top 90%",
        end: "top 95%",
        scrub: 2,
    }
})

document.querySelector(".hamburger").addEventListener("click", function () {
    let navbar = document.querySelector(".respNav");
    let hamburgerIcon = document.getElementById("hamburgerIcon");

    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
        hamburgerIcon.src = "hamburger.svg";
    } else {
        navbar.style.display = "flex";
        hamburgerIcon.src = "close.svg";
    }
});