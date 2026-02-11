/**
 * EcoPaws Custom Script
 * Replaces ReactJS logic with Vanilla JavaScript 1
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Scroll Effect
    // Replaces the scroll-based transparency logic from src/sections/Navigation.tsx
    const navbar = document.querySelector('nav');
    const handleScroll = () => {
        if (window.scrollY > 20) {
            navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-eco-cocoa/5');
            navbar.classList.remove('bg-transparent');
        } else {
            navbar.classList.add('bg-transparent');
            navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-eco-cocoa/5');
        }
    };
    window.addEventListener('scroll', handleScroll);

    // 2. Mobile Menu Toggle
    // Handles the mobile menu state that was managed by React's useState(false)
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            }
        });
    }

    // 3. GSAP Animations (ScrollTrigger)
    // Replaces the useEffect animations for features and CTA sections
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Feature Cards Stagger Animation
        gsap.from(".feature-card", {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".feature-card",
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Title Animations
        const titles = [".features-title", ".benefits-title", ".cta-title"];
        titles.forEach(selector => {
            gsap.from(selector, {
                y: 30,
                opacity: 0,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: selector,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        // Benefits Section Slide-in
        gsap.from(".benefit-item", {
            x: -30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".benefit-item",
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });
    }

    // 4. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu on link click
                if (isMenuOpen && mobileMenu) {
                    isMenuOpen = false;
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
});