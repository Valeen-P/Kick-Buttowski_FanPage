document.addEventListener('DOMContentLoaded', function() {
    const scrollSections = document.querySelectorAll('.scroll-section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    scrollSections.forEach(section => {
        observer.observe(section);
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
});

function expandCard(element) {
    const allItems = document.querySelectorAll(".timeline-stripe-item");

    if (element.classList.contains("active")) {
        // Si ya está activa, la cerramos
        element.classList.remove("active");
        allItems.forEach(item => item.classList.remove("dimmed"));
    } else {
        // Activamos esta y atenuamos el resto
        allItems.forEach(item => {
            item.classList.remove("active");
            item.classList.add("dimmed");
        });
        element.classList.add("active");
        element.classList.remove("dimmed");
    }
}