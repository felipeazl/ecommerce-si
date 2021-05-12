let formUser = document.getElementById('user')

formUser.innerHTML = "<ul> <li id='menu-cadastro-entrar'> <a href='cadastrar-entrar.html'>Cadastrar | Entrar</a> </li></ul>"

const authenticated = async () => {

  let url_authenticated = 'http://ecommercesi.herokuapp.com/authenticated'

  const token = window.sessionStorage.getItem('token');
  if (!token) {
    return;
  }
  const name = window.sessionStorage.getItem('name')

  const auth = await fetch(url_authenticated, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  })
  if (auth.url.split('/')[3] !== 'index.html') {
    console.log('here')
    window.sessionStorage.clear()
    return formUser.innerHTML = "<ul>  <li id='menu-cadastro-entrar'> <a href='cadastrar-entrar.html'>Cadastrar | Entrar</a> </li></ul>";
  }
  formUser.innerHTML = `<ul>  <li id='menu-cadastro-entrar'> Bem-vindo, ${name.split(' ')[0]}! <a href="#" onclick="window.sessionStorage.clear() 
    window.location.reload()"> Sair </a> </li></ul>`

}

document.addEventListener('DOMContentLoaded', authenticated)

function finalizarCompra() {
  let session

  try {
    session = sessionStorage.getItem("client_id")
  } catch (error) {
    return
  }
  if(!session){
    window.location.href = "cadastrar-entrar.html"
    return
  }
  window.location.href = "finalizar-compra.html"
}