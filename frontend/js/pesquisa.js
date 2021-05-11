let pesquisar_nome = document.getElementById('pesquisar-nome')
let produtos = document.getElementById('container-produtos')

let arrayTeste = []
let arrayProducts = []
let checkBoxChecked = 0

window.addEventListener('load', async () => {
  criarProdutos()
})

function criarProdutos() {
  for (let i = 0; i < produtos.children.length; i++) {
    arrayProducts.push(produtos.children.item(i))

  }
}

pesquisar = (prod) => {
  if (checkBoxChecked > 0) {

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
    checkBoxChecked += 1
    arrayProducts.filter(e => {
      e.hidden = true
    })


    for (const produto of produtos) {
      arrayTeste.push(produto)
    }


    arrayTeste.filter(e => {
      e.hidden = false
    })

  } else {
    checkBoxChecked -= 1
    for (let i = 0; i < arrayTeste.length; i++) {
      let q = arrayTeste[i].attributes.class.value.split(' ').includes(cor)
      if (q) {
        if (checkBoxChecked > 0) {
          arrayTeste[i].hidden = true
        }
        arrayTeste.splice(i, 1)
        i -= 1
      }
    }
    if (checkBoxChecked === 0) {
      arrayProducts.filter(e => {
        e.hidden = false
      })
    }
  }
}