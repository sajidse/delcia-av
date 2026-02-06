/* =========================================
   DELCIA AUDIO & VISUALS - MAIN SCRIPT
   ========================================= */

// Mobile Navigation Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close menu when clicking a link (optional, for better UX)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById('navLinks');
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Contact Form Handling
function submitForm(event) {
    event.preventDefault(); // Prevent default reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Since we don't have a backend mail server running in this static context,
    // we will simulate the action using mailto or just a success message.
    // The user requested: "click submit the company owner get an email".
    // A robust static-site way is `mailto:`

    // Construct Mailto Link
    const subject = encodeURIComponent(`New Inquiry from ${name}: ${service}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService Interest: ${service}\n\nMessage:\n${message}`);

    // In a real scenario, this would POST to an API.
    // For now, we open the user's email client.

    const mailtoLink = `mailto:info@delciaav.com?subject=${subject}&body=${body}`;

    // Confirm with user
    const confirmSend = confirm("Thank you for your inquiry!\n\nThis will open your email client to send the message to Delcia Audio & Visuals. Proceed?");

    if (confirmSend) {
        window.location.href = mailtoLink;

        // Reset form
        document.getElementById('contactForm').reset();
    }
}

// Fade In Animation on Scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select elements to animate (generic fade-in class could be added, 
// but applying to core sections here)
document.addEventListener('DOMContentLoaded', () => {
    const animElements = document.querySelectorAll('.service-card, .brand-item, .mission-text, .contact-container');

    animElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});
