function createNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.className = 'navbar';

    navbar.innerHTML = `
        <div class="navbar-container container">
            <a href="#" class="navbar-brand">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                MicroCombi
            </a>
            
            <button class="navbar-toggle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
            
            <ul class="navbar-menu">
                <li><a href="#" class="navbar-link">Home</a></li>
                <li><a href="#simulation" class="navbar-link">Simulation</a></li>
                <li><a href="specification.html" class="navbar-link">Specifications</a></li>
                <li><a href="specification.html" class="navbar-link">Applications</a></li>
        
            </ul>
        </div>
    `;

    const toggle = navbar.querySelector('.navbar-toggle');
    const menu = navbar.querySelector('.navbar-menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}

createNavbar();