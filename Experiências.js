document.addEventListener("DOMContentLoaded", () => {
    // Animação de entrada para seções
    const sections = document.querySelectorAll("main section");
    sections.forEach((section, index) => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 1s ease";

        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, index * 300); // delay entre seções
    });

    // Efeito de hover no menu do rodapé
    const links = document.querySelectorAll(".menu_rodape a");
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "#007bff";
            link.style.textDecoration = "underline";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = "";
            link.style.textDecoration = "none";
        });
    });

    // Aviso se encontrar tags HTML malformadas como <p1>, <p2>, etc.
    const invalidPTags = document.querySelectorAll("p1, p2, p3, p4, p5");
    if (invalidPTags.length > 0) {
        console.warn("⚠️ Aviso: Existem tags inválidas como <p1>, <p2> no HTML. Use apenas <p>.");
        alert("Há elementos <p1>, <p2> no seu HTML. Substitua por <p> para evitar problemas de exibição.");
    }

    // Scroll suave se usar âncoras no futuro
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
