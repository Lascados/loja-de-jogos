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
document.addEventListener("DOMContentLoaded", function() {

    function addToCart(event) {
        const button = event.target;
        const item = button.closest('.jogo');
        const itemName = item.dataset.name;
        const itemPrice = item.dataset.price;
        const itemImage = item.querySelector('img').src;


        let cart = JSON.parse(localStorage.getItem('cart')) || [];


        cart.push({
            name: itemName,
            price: itemPrice,
            image: itemImage
        });


        localStorage.setItem('cart', JSON.stringify(cart));


        window.location.href = "carrinho.html";
    }


    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", addToCart);
    });

    function redirectToPurchaseCompleted() {
        localStorage.removeItem('cart'); // Limpar o carrinho
        window.location.href = "comprafinalizada.html";
    }


    document.getElementById("checkout").addEventListener("click", function() {
        redirectToPurchaseCompleted();
    });
});
