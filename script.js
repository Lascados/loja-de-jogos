document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.left = i === index ? "0" : "100%";
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);

    showSlide(currentSlide);
});

/// Função para adicionar produtos ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const produtoElement = event.target.closest('.produto');
        const produtoId = produtoElement.dataset.name;
        const produtoNome = produtoElement.querySelector('h3').textContent;
        const produtoPreco = parseFloat(produtoElement.dataset.price); // Armazenar o preço como número

        adicionarAoCarrinho(produtoId, produtoNome, produtoPreco);
        atualizarContagemCarrinho();
    });
});

function adicionarAoCarrinho(produtoId, produtoNome, produtoPreco) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoExistente = carrinho.find(item => item.id === produtoId);

    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push({ id: produtoId, nome: produtoNome, preco: produtoPreco, quantidade: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
}

function atualizarContagemCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const totalItems = carrinho.reduce((total, item) => total + item.quantidade, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    carrinho.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')} x ${item.quantidade}`;
        cartItems.appendChild(itemElement);

        total += item.preco * item.quantidade; // Calcular o total corretamente
    });

    document.getElementById('cart-total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
    localStorage.removeItem('carrinho');
    window.location.href = 'compra.html';
}

if (window.location.pathname.endsWith('produto.html')) {
    carregarProduto();
}

if (window.location.pathname.endsWith('carrinho.html')) {
    carregarCarrinho();
}

// Atualiza a contagem de itens no carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarContagemCarrinho);