// Mensagem de boas-vindas ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    console.log("Bem-vindo ao portfólio de Luiz Felipe!");
});

// Efeito hover no menu
const menuLinks = document.querySelectorAll(".menu_rodape a");
menuLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#007bff"; // cor ao passar o mouse
    });
    link.addEventListener("mouseout", () => {
        link.style.color = ""; // volta à cor original
    });
});

// Scroll suave para navegação (caso use âncoras internas no futuro)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Criar botão "voltar ao topo"
const backToTop = document.createElement("button");
backToTop.innerText = "↑ Topo";
backToTop.id = "backToTop";
Object.assign(backToTop.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    padding: "10px 15px",
    fontSize: "16px",
    display: "none",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    zIndex: 1000
});
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
