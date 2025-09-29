let btnMenu = document.getElementById("btn__menu__mobile");
let line1 = document.querySelector(".line1__btn__mobile");
let line2 = document.querySelector(".line2__btn__mobile");
let menuBtn = document.getElementById("header__menu__mobile");
let body = document.body;

// Função para fechar o menu
function closeMenu() {
    line1.classList.remove("activate__line1");
    line2.classList.remove("activate__line2");
    menuBtn.classList.remove("open");
    body.classList.remove("no__overflow");
}

// Event listener para abrir/fechar o menu
btnMenu.addEventListener("click", () => {
    line1.classList.toggle("activate__line1");
    line2.classList.toggle("activate__line2");
    menuBtn.classList.toggle("open");
    body.classList.toggle("no__overflow");
});

// Event listeners para os links do menu mobile
document.addEventListener("DOMContentLoaded", function() {
    let menuLinks = document.querySelectorAll("#header__menu__mobile a");
    
    menuLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Previne o comportamento padrão
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Primeiro fecha o menu
                closeMenu();
                
                // Depois navega para a seção com um pequeno delay
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300); // 300ms de delay para dar tempo do menu fechar
            }
        });
    });
});