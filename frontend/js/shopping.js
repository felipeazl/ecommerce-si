let container = document.getElementById('container-produtos')
let listPedidos = document.getElementById('cart')
let dropDownProdList = document.getElementById('inside-cart')
let totalBuy = document.getElementById('totalBuy')

try {
  let total = `${JSON.parse(localStorage.getItem('order_id')).length}`
  
  listPedidos.setAttribute('data-totalitems', total)
  
  dropDownProdList.setAttribute('data-totalitems', total)

  totalBuy.textContent = `R$ ${localStorage.getItem('totalValue')}`

} catch (error) {
  console.error(error)
}
let orders = {}

async function start() {
  let response = await fetch('http://ecommercesi.herokuapp.com/customers/getdata')

  let json = await response.json()

  let produtos = json['produtos']

  let t = 0
  for (const produto of produtos) {
    container.innerHTML +=
      `<div id="produto${t + 1}" class="posts ${produto.color}">
        <div class="post">
        <div class="bg">
          <img class="produto-image" src="${produto.prod_image}" title="${produto.desc}" alt="${produto.title}">
        <div/>
          <div class="content">
            <h2>${produto.title}</h2>
            <p>R$ ${produto.price}</p>
            <div>
            <button class='botao-comprar' onclick="shopping(${t})">Comprar</button>
          </div>
        </div>
      </div>`
    t++
  }
}
start()

async function shopping(index) {

  let response = await fetch('http://ecommercesi.herokuapp.com/customers/getdata')

  let json = await response.json()

  let produto = json['produtos']

  client_id = sessionStorage.getItem('client_id')

  let prodExists = [JSON.parse(localStorage.getItem('order_id'))]

  let ordersList = []
  ordersObj = {
    client_id: client_id,
    desc: {
      'id': produto[index].id,
      'prod_title': produto[index].title,
      'prod_price': produto[index].price.replaceAll(',', '.'),
      'prod_image': produto[index].prod_image,
      'quantidade': 1,
    }
  }

  if (prodExists[0]) {
    ordersList = prodExists[0]
  }
  ordersList[ordersList.length] = ordersObj

  localStorage.setItem('order_id', JSON.stringify(ordersList))
  prodExists = JSON.parse(localStorage.getItem('order_id'))
  calcularCompra(prodExists)
}

function calcularCompra(totalPedidos) {

  let num = totalPedidos.length
  listPedidos.setAttribute('data-totalitems', `${num}`)

  
  let totalProduts = JSON.parse(localStorage.getItem('order_id'))
  dropDownProdList.setAttribute('data-totalitems', totalProduts.length)

  
let totalItems = JSON.parse(localStorage.getItem('order_id'))

let totalValue = 0
for (const item of totalItems) {
  if (item.client_id === undefined || item.client_id === null) {
    try {
      item.client_id = sessionStorage.getItem('client_id')
      
    } catch (error) {
      
    }
  }
  totalValue += Number(item.desc.prod_price)
}
  totalBuy.textContent = `R$ ${totalValue.toFixed(2)}`
  
  localStorage.setItem('totalValue', `${totalValue.toFixed(2)}`)

}
