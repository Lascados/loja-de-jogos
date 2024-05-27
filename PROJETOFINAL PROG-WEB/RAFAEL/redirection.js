document.addEventListener("DOMContentLoaded", function() {

    function redirectToCart() {
        window.location.href = "carrinho.html";
    }


    function redirectToPurchaseCompleted() {
        window.location.href = "comprafinalizada.html";
    }


    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            redirectToCart();
        });
    });

   
    document.getElementById("checkout").addEventListener("click", function() {
        redirectToPurchaseCompleted();
    });
});
