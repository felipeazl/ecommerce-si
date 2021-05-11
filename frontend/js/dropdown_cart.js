const dropdown_cart = document.getElementById('dropdown-cart');
let cartProduct = document.getElementsByClassName('cart-product')


function showDropdownCart() {
  dropdown_cart.classList.toggle('show-dropdown-cart');
}


let totalProdutcs = JSON.parse(localStorage.getItem('order_id'))
let userId = sessionStorage.getItem('client_id')

let totalValueIdOne = 0
let totalProds = Array(16)
let showTotalArray = []

let showTotalObj = {
  'id': '',
  'prod_price': '',
  'prod_title': '',
  'quantidade': '0'
}

function generateCartWithProdutcts() {

  for (let produto of totalProdutcs) {
    if (produto.client_id === userId) {

      for (let i = 0; i < totalProds.length; i++) {
        if (produto.desc.id === `${i + 1}`) {
          

          if (showTotalObj.id in showTotalArray) {
            
            showTotalObj = {
              id: produto.desc.id,
              prod_title: produto.desc.prod_title,
              quantidade: showTotalArray[i + 1].quantidade + 1,
              prod_price: Number(produto.desc.prod_price) * showTotalArray[i + 1].quantidade,
            }
          } else {

            showTotalObj = {
              id: produto.desc.id,
              prod_title: produto.desc.prod_title,
              prod_price: produto.desc.prod_price,
              quantidade: produto.desc.quantidade
            }
          }
          showTotalArray[Number(produto.desc.id)] = showTotalObj
        }
      }
    }
  }

  console.log(showTotalArray)
}

generateCartWithProdutcts()