// Animaciones con GSAP
gsap.registerPlugin(ScrollTrigger);

// Animación para la sección "Sobre Mí"
gsap.from("#about", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
});

// Animación para la sección "Servicios"
gsap.from("#services .bg-gray-700", {
    scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
});

// Animación para la sección "Proyectos"
gsap.from("#works .bg-gray-700", {
    scrollTrigger: {
        trigger: "#works",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
});

// Smooth scrolling para los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});