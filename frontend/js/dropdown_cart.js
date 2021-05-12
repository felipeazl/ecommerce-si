const dropdown_cart = document.getElementById('dropdown-cart');
const cart = document.getElementById('cart');
let cartProduct = document.getElementsByClassName('cart-product')


function showDropdownCart() {
  dropdown_cart.classList.toggle('show-dropdown-cart');
}


let totalProdutcs;
let userId = sessionStorage.getItem('client_id')

let showTotalArray = []

let showTotalObj = {
  'id': '',
  'prod_price': '',
  'prod_title': '',
  'quantidade': '0'
}

function generateCartWithProdutcts() {
  setTimeout(function () {
    totalProdutcs = JSON.parse(localStorage.getItem('order_id'))
    showProds(totalProdutcs)
  }, 100)
  const showProds = (totalProds) => {

    totalProds.filter((item, i) => {
      
      if (totalProds[i].desc.id in totalProds) {
        console.log('não deveria cair aqui')
        return;
      } else {
        return generateOProductsObj(totalProds[i], totalProds[i].desc.id - 1)
      }

    })
  }
}

function generateOProductsObj(prodObject, i) {

  showTotalArray[Number(i)] = prodObject
  console.log(showTotalArray)
}