let produtos = document.getElementsByClassName('produto')
let pesquisar_nome = document.getElementById('pesquisar-nome')
let prodImage = document.getElementsByClassName('produto-image')
let checkbox_preto = document.getElementById("cor-preto")
let checkbox_vermelho = document.getElementById("cor-vermelho")
let checkbox_azul = document.getElementById("cor-azul")
let checkbox_rosa = document.getElementById("cor-rosa")
let copyArrayProducts = []
let copyProdutos

let arrayProducts = []

for (let i = 0; i < produtos.length; i++) {
  prodImage.item(i).src = `images/produtos/${i + 1}.png`
  arrayProducts.push(produtos.item(i))
}

function listaProdutos(){
  for (let i = 0; i < copyProdutos.length; i++) {
    copyProdutos.item(i).hidden=true
  }
  for (let i = 0; i < produtos.length; i++) {
    prodImage.item(i).src = `images/produtos/${i + 1}.png`
    arrayProducts.push(produtos.item(i))
    produtos.item(i).hidden=false
  }
}

let pesquisar = (prod) => {

  console.log(arrayProducts)
  arrayProducts.filter(e => {
    let termoPesquisa = e.children[1].textContent.toUpperCase().includes(prod.value.toUpperCase())
    if (termoPesquisa) {
      e.hidden = false
      return e
    }
    e.hidden = true
    return e
  })
}

checkbox_preto.addEventListener('click', function () {
  if (!checkbox_preto.checked) {
    copyArrayProducts = arrayProducts
    copyProdutos = produtos
    produtos = document.getElementsByClassName("produto")
    arrayProducts = []
    listaProdutos()
    return;
  }
  copyArrayProducts = arrayProducts
  copyProdutos = produtos
  produtos = document.getElementsByClassName("preto")
  arrayProducts = []
  listaProdutos()
  console.log(arrayProducts)
})

checkbox_vermelho.addEventListener('click', function () {
  if (!checkbox_vermelho.checked) {
    copyArrayProducts = arrayProducts
    copyProdutos = produtos
    produtos = document.getElementsByClassName("produto")
    arrayProducts = []
    listaProdutos()
    return;
  }
  copyArrayProducts = arrayProducts
  copyProdutos = produtos
  produtos = document.getElementsByClassName("vermelho")
  arrayProducts = []
  listaProdutos()
  console.log(arrayProducts)
})

checkbox_azul.addEventListener('click', function () {
  if (!checkbox_azul.checked) {
    copyArrayProducts = arrayProducts
    copyProdutos = produtos
    produtos = document.getElementsByClassName("produto")
    arrayProducts = []
    listaProdutos()
    return;
  }
  copyArrayProducts = arrayProducts
  copyProdutos = produtos
  produtos = document.getElementsByClassName("azul")
  arrayProducts = []
  listaProdutos()
  console.log(arrayProducts)
})

checkbox_rosa.addEventListener('click', function () {
  if (!checkbox_rosa.checked) {
    copyArrayProducts = arrayProducts
    copyProdutos = produtos
    produtos = document.getElementsByClassName("produto")
    arrayProducts = []
    listaProdutos()
    return;
  }
  copyArrayProducts = arrayProducts
  copyProdutos = produtos
  produtos = document.getElementsByClassName("rosa")
  arrayProducts = []
  listaProdutos()
  console.log(arrayProducts)
})