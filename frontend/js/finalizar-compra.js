let totalProdutos = document.getElementById('conteudo')

async function start() {
  let produtos = JSON.parse(localStorage.getItem('order_id'))

  let cont = 0;
  for (const produto of produtos) {
    totalProdutos.innerHTML +=
      `<div class="row">
        <div class="column">
          <div>
            <img class="produto-img" src="${produto.desc.prod_image}" alt="">
            <h2 class="produto-titulo">${produto.desc.prod_title}</h2>
          </div>
          <div>
            <label class="produto-qntd-lb" for="quantidade">Quantidade:</label>
            <label class="produto-qntd" for="produto-quantidade">${produto.desc.quantidade}</label>
            <label class="produto-qntd" for="produto-quantidade">R$ ${produto.desc.prod_price}</label>
            <i class="produto-rm fas fa-minus" onclick="removeProduct(${cont})"></i>
            <i class="produto-add fas fa-plus"></i>
          </div>
        </div>
      </div>`
  }
}
start()


function removeProduct(id) {
  let prods = JSON.parse(localStorage.getItem('order_id'))
  prods.splice(id, 1)

  localStorage.setItem('order_id', JSON.stringify(prods))

  window.location.reload()


}