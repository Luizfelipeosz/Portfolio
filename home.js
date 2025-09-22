document.addEventListener("DOMContentLoaded", () => {
    // 1. Animação de entrada suave para elementos principais
    const animarEntrada = (elementos, delay = 0) => {
        elementos.forEach((el, index) => {
            el.style.opacity = 0;
            el.style.transform = "translateY(30px)";
            el.style.transition = "all 0.8s ease";

            setTimeout(() => {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }, delay + index * 200);
        });
    };

    animarEntrada([document.querySelector("header")], 0);
    animarEntrada(document.querySelectorAll("section"), 500);
    animarEntrada(document.querySelectorAll(".card"), 800);

    // 2. Efeito de hover nos links do rodapé
    const menuLinks = document.querySelectorAll("footer .menu_rodape a");
    menuLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "#007bff";
            link.style.textDecoration = "underline";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = "";
            link.style.textDecoration = "none";
        });
    });

    // 3. Aviso de tags inválidas (li1, li2, etc.)
    const tagsInvalidas = document.querySelectorAll("li1, li2, li3, li4, li5");
    if (tagsInvalidas.length > 0) {
        console.warn("⚠️ Tags inválidas encontradas como <li1>, <li2>, etc. Use apenas <li>.");
        alert("Há tags inválidas no HTML (como <li1>, <li2>). Substitua por <li> para funcionar corretamente.");
    }

    // 4. Scroll suave para âncoras (se forem adicionadas)
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", (e) => {
            const destino = document.querySelector(link.getAttribute("href"));
            if (destino) {
                e.preventDefault();
                destino.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
