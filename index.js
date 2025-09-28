// get elements
const cartImg = document.querySelector(".header__cart-btn");
const cartElement = document.querySelector(".cart");
const cartCloseBtn = document.querySelector(".cart__close-btn");
const filterBtn = document.querySelector(".products__filter-btn");
const productsDialog = document.querySelector(".filter__dialog");
const filterCloseBtn = document.querySelector(".filter__close-btn")

const headerElement = document.querySelector(".header");
const heroElement = document.querySelector(".hero");
const productGridElement = document.querySelector(".products__grid");



cartImg.addEventListener("click", toggleCart);
cartCloseBtn.addEventListener("click", closeCart);
filterBtn.addEventListener("click", toggleFilterDialog)
filterCloseBtn.addEventListener("click", closeFilterDialog);
productsDialog.addEventListener("keydown", closeModal);

function toggleCart(e) {
    e.preventDefault();

    if (screen.width >= 1440) {
        cartElement.classList.toggle("toggle-cart-open");

    }
}

function closeCart(e) {
    e.preventDefault();

    cartElement.classList.toggle("toggle-cart-open");
}

function toggleFilterDialog() {

    if (screen.width <= 1440) {
        headerElement.style.display = "none";
        heroElement.style.display = "none";
        productGridElement.style.display = "none";
        productsDialog.showModal();
    }
}

function closeFilterDialog(e) {
    e.preventDefault();

    displayElements();
}

function closeModal(e) {
    if (e.code === "Escape") {
        displayElements();
    }
}

function displayElements() {
    headerElement.removeAttribute("style")
    heroElement.removeAttribute("style")
    productGridElement.removeAttribute("style")
    productsDialog.close();
}