const dropdown_cart = document.getElementById('dropdown-cart');
let cartProduct = document.getElementsByClassName('cart-product')


function showDropdownCart() {
  dropdown_cart.classList.toggle('show-dropdown-cart');
}


let totalProdutcs = JSON.parse(localStorage.getItem('order_id'))
let userId = sessionStorage.getItem('client_id')

let totalValueIdOne = 0
let totalProds = Array(16)
let showTotal = {}

function generateCartWithProdutcts() {

  for (let produto of totalProdutcs) {
    if (produto.client_id === userId) {

      for (let i = 0; i < totalProds.length; i++) {
        if (produto.desc.id === `${i + 1}`) {
          showTotal = produto
          showTotal.desc.quantidade += produto.desc.quantidade
          totalValueIdOne += Number(produto.desc.prod_price)
        }
      }

    }
  }

  console.log(showTotal)
}

generateCartWithProdutcts()