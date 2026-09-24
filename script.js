const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];

let mouse = {
    x: null,
    y: null
};


function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    createStars();
}


function createStars() {

    stars = [];

    const numberOfStars = 140;

    for (let i = 0; i < numberOfStars; i++) {

        stars.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height,

            size: Math.random() * 1.5 + 0.2,

            speed: Math.random() * 0.25 + 0.05,

            originalX: 0,

            originalY: 0

        });

    }

    stars.forEach(star => {

        star.originalX = star.x;
        star.originalY = star.y;

    });
}


window.addEventListener("mousemove", function(event) {

    mouse.x = event.clientX;
    mouse.y = event.clientY;

});


function animateStars() {

    if (document.hidden) {
        return;
    }

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    stars.forEach(star => {

        let dx = mouse.x - star.x;
        let dy = mouse.y - star.y;

        let distance = Math.sqrt(
            dx * dx + dy * dy
        );


        if (distance < 120) {

            star.x -= dx * 0.003;
            star.y -= dy * 0.003;

        }


        ctx.beginPath();

        ctx.arc(
            star.x,
            star.y,
            star.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "white";

        ctx.fill();


        star.y += star.speed;


        if (star.y > canvas.height) {

            star.y = 0;

        }

    });


    requestAnimationFrame(animateStars);
}


window.addEventListener("resize", resizeCanvas);


resizeCanvas();
animateStars();
// ---------- SCROLL REVEAL ----------

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
// ---------- ACTIVE NAVIGATION ----------

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

function updateNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateNavigation);

updateNavigation();
    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
const menuToggle = document.querySelector(".menu-toggle");
const mobileNavLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    mobileNavLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        mobileNavLinks.classList.remove("active");
    });
});