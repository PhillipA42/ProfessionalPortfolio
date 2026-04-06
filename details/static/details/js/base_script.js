document.addEventListener("DOMContentLoaded", function () {
    // --- 1. Light/Dark Mode Logic ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // Apply saved theme immediately
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents page jump
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        
        if (themeIcon) {
            // Use setAttribute for classes to avoid 'replace' errors if the class is missing
            if (theme === 'light') {
                themeIcon.className = 'fas fa-sun';
                themeIcon.style.color = '#ffaa00';
            } else {
                themeIcon.className = 'fas fa-moon';
                themeIcon.style.color = '#17BEBB'; 
            }
        }
    }

    // --- 2. Mobile Navbar Behavior ---
    const menuToggle = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Check if both the menu and Bootstrap exist before initializing
    if (menuToggle && typeof bootstrap !== 'undefined') {
        try {
            const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

            navLinks.forEach((l) => {
                l.addEventListener('click', () => {
                    if (menuToggle.classList.contains('show')) {
                        bsCollapse.hide();
                    }
                });
            });
        } catch (err) {
            console.log("Bootstrap Navbar helper skipped:", err.message);
        }
    }
});