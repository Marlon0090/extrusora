/* =========================
   ANIMAÇÃO AO ROLAR A PÁGINA
========================= */

const elementos = document.querySelectorAll(
    '.extrusao-header, .extrusao-galeria .imagem'
);

const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ativo');
        }
    });
}, {
    threshold: 0.2
});

elementos.forEach((elemento) => {
    observador.observe(elemento);
});


/* =========================
   EFEITO DE HOVER NAS IMAGENS
========================= */

const imagens = document.querySelectorAll('.extrusao-galeria .imagem');

imagens.forEach((imagem) => {
    imagem.addEventListener('mousemove', (e) => {
        const rect = imagem.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        imagem.style.transform =
            `perspective(1000px)
             rotateY(${(x - rect.width / 2) / 35}deg)
             rotateX(${-(y - rect.height / 2) / 35}deg)
             translateY(-8px)`;
    });

    imagem.addEventListener('mouseleave', () => {
        imagem.style.transform =
            'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
    });
});