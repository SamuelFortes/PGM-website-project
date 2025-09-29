document.getElementById("year").textContent = new Date().getFullYear();

// Scroll suave para todos os links âncora (menu desktop e mobile)
document.addEventListener("DOMContentLoaded", function() {
    // Para links do menu desktop
    document.querySelectorAll('.header-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});