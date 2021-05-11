let pesquisar_nome = document.getElementById('pesquisar-nome')
let produtos = document.getElementById('container-produtos')

let arrayTeste = []
let arrayProducts = []

let isCheckboxCheked = false

window.addEventListener('load', async () => {
  criarProdutos()
})

function criarProdutos() {
  for (let i = 0; i < produtos.children.length; i++) {
    arrayProducts.push(produtos.children.item(i))

  }
}

pesquisar = (prod) => {
  if (isCheckboxCheked) {

    arrayTeste.filter(e => {
      let termoPesquisa = e.children.item(0).textContent.toUpperCase().includes(prod.value.toUpperCase())
      if (termoPesquisa) {
        e.hidden = false

        return e
      }
      e.hidden = true
      return e;
    })
  } else {
    arrayProducts.filter(e => {
      let termoPesquisa = e.children.item(0).textContent.toUpperCase().includes(prod.value.toUpperCase())

      if (termoPesquisa) {
        e.hidden = false
        return e
      }
      e.hidden = true
      return e;
    })
  }
}

function checkboxVerify(props) {
  recriarLista(props.id.split('-')[1], props.checked)
  isCheckboxCheked = props.checked
}

function removerPreto() {

}
const recriarLista = (cor, isChecked) => {
  produtos = document.getElementsByClassName(cor)

  if (isChecked) {
    for (const produto of produtos) {
      arrayTeste.push(produto)
    }

  } else {
    for (let i = 0; i < arrayTeste.length; i++) {
      let q = arrayTeste[i].attributes.class.value.split(' ').includes(cor)
      if (q) {
        arrayTeste.splice(i, 1)
        i -= 1
      }
    }
  }
}