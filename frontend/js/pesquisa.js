let pesquisar_nome = document.getElementById('pesquisar-nome')

let produtos = document.getElementById('container-produtos')
let checkbox_preto = document.getElementById("cor-preto")
let checkbox_vermelho = document.getElementById("cor-vermelho")
let checkbox_azul = document.getElementById("cor-azul")
let checkbox_rosa = document.getElementById("cor-rosa")
let copyProdutos

let arrayProducts = []

let que = window.addEventListener('load', () => {

  for (let i = 0; i < produtos.children.length; i++) {
    arrayProducts.push(produtos.children.item(i))
  }

  function listaProdutos() {
    for (let i = 0; i < copyProdutos.length; i++) {
      copyProdutos.item(i).hidden = true
    }
    for (let i = 0; i < produtos.length; i++) {
      arrayProducts.push(produtos.item(i))
      produtos.item(i).hidden = false
    }
  }

  pesquisa = (prod) => {

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
  return arrayProducts;
})

const pesquisar = (props) => {
  console.log(props)
}