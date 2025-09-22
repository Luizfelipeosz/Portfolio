document.addEventListener("DOMContentLoaded", () => {
    // Animação na mensagem principal
    const mensagem = document.querySelector('.mensagem');
    mensagem.style.opacity = 0;
    mensagem.style.transition = "opacity 2s";
    setTimeout(() => {
        mensagem.style.opacity = 1;
    }, 500);

    // Hover nos cartões de contato
    const cards = document.querySelectorAll('.contato-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '';
        });
    });

    // Scroll suave nos links do rodapé
    const linksRodape = document.querySelectorAll('footer nav a');
    linksRodape.forEach(link => {
        link.addEventListener('click', (e) => {
            // Se for um link âncora interno, ativa scroll suave
            const href = link.getAttribute('href');
            if (href.startsWith("#")) {
                e.preventDefault();
                const destino = document.querySelector(href);
                if (destino) {
                    destino.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Verificação de conectividade
    if (!navigator.onLine) {
        alert("Você está offline! Alguns links podem não funcionar.");
    }

    // Validação de links externos (opcional, simples)
    const externalLinks = document.querySelectorAll('.contato-card a');
    externalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const url = link.href;
            // Aqui você poderia fazer uma verificação extra com fetch se quiser.
            console.log(`Abrindo link externo: ${url}`);
        });
    });
});
