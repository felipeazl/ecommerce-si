const produtos = document.getElementsByClassName('produto')
const pesquisar_nome = document.getElementById('pesquisar-nome')

const arrayProducts = []

for (let i = 0; i < produtos.length; i++) {
  arrayProducts.push(produtos.item(i))
}

const pesquisar = (prod) => {

  arrayProducts.filter(e => {
    const termoPesquisa = e.children[1].textContent.toUpperCase().includes(prod.value.toUpperCase())
    if (termoPesquisa) {
      e.hidden = false
      return e
    }
    e.hidden = true
    return e
  })
}