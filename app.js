// FirstDollar App JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Animate gauges on scroll
    const gauges = document.querySelectorAll('.gauge-svg');
    let gaugesAnimated = false;

    function animateGauge(gauge) {
        const target = parseInt(gauge.getAttribute('data-target'));
        const fill = gauge.querySelector('.gauge-fill');
        const valueText = gauge.querySelector('.gauge-value');
        
        // Arc length is approximately 157 for a semi-circle
        const maxArc = 157;
        const halfArc = maxArc / 2;
        
        // Calculate the filled portion based on target (0-100)
        const targetFill = (target / 100) * halfArc;
        const dashOffset = halfArc - targetFill;
        
        // Animate the fill
        fill.style.strokeDasharray = `${halfArc} ${maxArc}`;
        fill.style.strokeDashoffset = halfArc; // Start at 0
        
        setTimeout(() => {
            fill.style.strokeDashoffset = dashOffset;
            valueText.textContent = target;
        }, 100);
    }

    function checkGaugesInView() {
        if (gaugesAnimated) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gaugesAnimated = true;
                    gauges.forEach((gauge, index) => {
                        setTimeout(() => animateGauge(gauge), index * 200);
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });
        
        gauges.forEach(gauge => observer.observe(gauge.closest('section')));
    }

    // Initialize gauges
    checkGaugesInView();

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        trigger.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(other => {
                if (other !== item) other.classList.remove('active');
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Hero Form Submit
    const heroForm = document.getElementById('hero-form');
    heroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = heroForm.querySelector('input[type="email"]').value;
        // In production, this would send to an API
        alert(`Thanks! We'll be in touch at ${email}`);
        heroForm.reset();
    });

    // Checkout Button
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', () => {
        // In production, this would open Stripe checkout
        alert('Stripe checkout would open here. This is an MVP demo.');
    });

    // Nav scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
