let container = document.getElementById('container-produtos')
let listPedidos = document.getElementById('cart')
try {
  listPedidos.setAttribute('data-totalitems', `${JSON.parse(localStorage.getItem('order_id')).length}`)
} catch (error) {
  console.error(error)
}
let orders = {}

async function start() {
  let response = await fetch('http://127.0.0.1:5500/frontend/database/produtos.json')

  let json = await response.json()

  let produtos = json['produtos']

  let t = 0
  for (const produto of produtos) {
    container.innerHTML +=
      `<div id="produto0${t}" class="posts">
        <div class="post">
          <img class="produto-image" src="${produto.prod_image}" alt="${produto.title}">
          <div class="content">
            <h2>${produto.title}</h2>
            <p>R$ ${produto.price}</p>
            <div id="addCart" onclick="shopping(${t})"><i class="fas fa-plus-circle"></i></div>
          </div>
        </div>
      </div>`
    t++
  }
}
start()

async function shopping(index) {

  let response = await fetch('http://127.0.0.1:5500/frontend/database/produtos.json')

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
      'prod_price': produto[index].price,
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

  // for (let i = 0; i < totalPedidos.length; i++) {
  //   const element = totalPedidos[i];
  //   console.log(element)
  // }
}
