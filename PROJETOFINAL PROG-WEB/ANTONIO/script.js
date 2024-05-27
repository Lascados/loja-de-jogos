// Função para adicionar produto ao carrinho e salvar no localStorage
function adicionarAoCarrinho() {
    const produtoId = new URLSearchParams(window.location.search).get('id');
    const produtoNome = document.getElementById('product-name').textContent;
    const produtoPreco = document.getElementById('product-price').textContent;

    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ id: produtoId, nome: produtoNome, preco: produtoPreco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
}

// Função para carregar os detalhes do produto na página do produto
function carregarProduto() {
    const produtoId = new URLSearchParams(window.location.search).get('id');
    
    // Exemplo de dados de produtos
    const produtos = {
        '1': { nome: 'Produto 1', preco: 'R$ 99,90', imagem: 'produto1.jpg' },
        '2': { nome: 'Produto 2', preco: 'R$ 199,90', imagem: 'produto2.jpg' },
    };

    if (produtos[produtoId]) {
        document.getElementById('product-name').textContent = produtos[produtoId].nome;
        document.getElementById('product-price').textContent = produtos[produtoId].preco;
        document.getElementById('product-image').src = produtos[produtoId].imagem;
    }
}

// Função para carregar os itens do carrinho na página do carrinho
function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    carrinho.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.nome} - ${item.preco}`;
        cartItems.appendChild(itemElement);

        total += parseFloat(item.preco.replace('R$', '').replace(',', '.'));
    });

    document.getElementById('cart-total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Função para finalizar a compra e limpar o carrinho
function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
    localStorage.removeItem('carrinho');
    window.location.href = 'compra.html';
}

// Inicializa a página de produto
if (window.location.pathname.endsWith('produto.html')) {
    carregarProduto();
}

// Inicializa a página do carrinho
if (window.location.pathname.endsWith('carrinho.html')) {
    carregarCarrinho();
}
