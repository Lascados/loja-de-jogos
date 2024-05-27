// Função para adicionar item ao carrinho
function addToCart(jogoId) {
    // Armazena o carrinho em localStorage ou outro método
    // Atualiza a contagem de itens no carrinho
}

// Botões de adicionar ao carrinho nos elementos 'jogo'
const buttons = document.querySelectorAll('.jogo button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const jogoId = button.dataset.jogoId;
        addToCart(jogoId);
    });
});
