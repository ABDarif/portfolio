document.addEventListener("DOMContentLoaded", function () {
    // Scroll Animation for each section
    const sections = document.querySelectorAll(".section");
    const options = { threshold: 0.2 };
    const links = document.querySelectorAll("#sidebar ul li a");

    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY;
        links.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (
                section.offsetTop <= fromTop + 50 &&
                section.offsetTop + section.offsetHeight > fromTop + 50
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Footer Date and Location
    const footerText = document.getElementById("footer-text");
    footerText.innerHTML = `Page location: ${window.location.href} & Last modified: ${document.lastModified}`;
});

document.querySelector('.sidebar-toggle').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('open');
  });

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('#sidebar a, .sidebar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').split('#')[1];
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Calculate the center position
                const windowHeight = window.innerHeight;
                const sectionHeight = targetSection.offsetHeight;
                const sidebarWidth = window.innerWidth > 768 ? 200 : 0; // 200px on desktop, 0 on mobile
                
                // Calculate scroll position to center the section
                let scrollPosition;
                
                if (targetId === 'home') {
                    // For home section, center it in the viewport
                    const sectionTop = targetSection.offsetTop;
                    const centerOffset = (windowHeight - sectionHeight) / 2;
                    scrollPosition = sectionTop - centerOffset;
                } else {
                    // For other sections, use normal scroll with offset
                    scrollPosition = targetSection.offsetTop - 100;
                }
                
                // Ensure scroll position is not negative
                scrollPosition = Math.max(0, scrollPosition);
                
                // Smooth scroll to the calculated position
                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Update footer text
document.addEventListener('DOMContentLoaded', function() {
    const footerText = document.getElementById('footer-text');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.textContent = `© ${currentYear} Abdullah Arif. All rights reserved.`;
    }
});
  