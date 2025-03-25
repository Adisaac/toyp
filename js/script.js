/* JavaScript for TOYP UNIBEN Homepage */

document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    fadeElements.forEach(el => observer.observe(el));

    // Countdown Timer
    function startCountdown() {
        const eventDate = new Date("July 30, 2025 18:00:00").getTime();
        const countdown = document.getElementById("countdown-timer");
        
        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = eventDate - now;

            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdown.innerHTML = `${days} days ${hours} hrs ${minutes} mins ${seconds} secs`;
        }
        
        setInterval(updateCountdown, 1000);
        updateCountdown();
    }
    startCountdown();

    // Testimonial Slider
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll(".testimonial");

    function showNextTestimonial() {
        testimonials.forEach(t => t.classList.remove("active"));
        testimonials[currentTestimonial].classList.add("active");
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }
    setInterval(showNextTestimonial, 5000);
    showNextTestimonial();

    // Social Media Icon Hover Effect
    const socialIcons = document.querySelectorAll(".social-media img");
    socialIcons.forEach(icon => {
        icon.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.2) rotate(360deg)";
            this.style.transition = "transform 0.5s ease";
        });
        icon.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });
});
