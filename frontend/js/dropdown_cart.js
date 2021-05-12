const dropdown_cart = document.getElementById('dropdown-cart');
let cartProduct = document.getElementsByClassName('cart-product')
let cartProductsArray = document.getElementById('cart-array')


function showDropdownCart() {
  dropdown_cart.classList.toggle('show-dropdown-cart');
}
