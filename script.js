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