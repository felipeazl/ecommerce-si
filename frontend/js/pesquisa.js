let produtos = document.getElementsByClassName('posts')
let pesquisar_nome = document.getElementById('pesquisar-nome')
let prodImage = document.getElementsByClassName('produto-image')
let checkbox_preto = document.getElementById("cor-preto")
let checkbox_vermelho = document.getElementById("cor-vermelho")
let checkbox_azul = document.getElementById("cor-azul")
let checkbox_rosa = document.getElementById("cor-rosa")
let copyArrayProducts = []
let copyProdutos

let arrayProducts = []

let prodImages = [
  'https://i.ibb.co/yg0nFWz/1.png',
  'https://i.ibb.co/4sLcwp3/2.png',
  'https://i.ibb.co/QkjHYq3/3.png',
  'https://i.ibb.co/pLbHT84/4.png',
  'https://i.ibb.co/kJz7m6k/5.png',
  'https://i.ibb.co/g3sCSHk/6.png',
  'https://i.ibb.co/sFb5YzH/7.png',
  'https://i.ibb.co/BgjkRCR/8.png',
  'https://i.ibb.co/qBRfkcy/9.png',
  'https://i.ibb.co/wh9YHRQ/10.png',
  'https://i.ibb.co/FKhNTRd/11.png',
  'https://i.ibb.co/cr9ZSKT/12.png',
  'https://i.ibb.co/Kj3htmy/13.png',
  'https://i.ibb.co/6stpr28/14.png',
  'https://i.ibb.co/dt75WNY/15.png',
  'https://i.ibb.co/xHH79vk/16.png',
]


for (let i = 0; i < produtos.length; i++) {
  prodImage.item(i).src = `${prodImages[i]}`
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
  (arrayProducts)
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
})