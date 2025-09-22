document.addEventListener("DOMContentLoaded", () => {
    // 1. Animação de entrada do conteúdo
    const container = document.querySelector(".container");
    container.style.opacity = 0;
    container.style.transform = "translateY(30px)";
    container.style.transition = "all 1s ease";

    setTimeout(() => {
        container.style.opacity = 1;
        container.style.transform = "translateY(0)";
    }, 300);

    // 2. Efeito de hover nos botões
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.backgroundColor = "#007bff";
            button.style.color = "#fff";
            button.style.transition = "all 0.3s";
        });
        button.addEventListener("mouseleave", () => {
            button.style.backgroundColor = "";
            button.style.color = "";
        });
    });

    // 3. Scroll suave para links com âncoras (se usados futuramente)
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // 4. Correção automática de erro de digitação
    const texto = container.innerHTML;
    const textoCorrigido = texto.replace(/cirança/gi, "criança");
    if (texto !== textoCorrigido) {
        container.innerHTML = textoCorrigido;
        console.warn("🚨 Palavra corrigida: 'cirança' → 'criança'");
    }

    // 5. Alerta se encontrar tags inválidas como <p1>, <button1> etc.
    const tagsInvalidas = document.querySelectorAll("p1, button1, div1, span1");
    if (tagsInvalidas.length > 0) {
        alert("⚠️ Existem tags HTML inválidas como <p1>, <button1>. Substitua por tags corretas.");
    }
});
