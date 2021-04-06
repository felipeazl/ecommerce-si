let formUser = document.getElementById('user')
  
formUser.innerHTML = "<ul> <li id='menu-cadastro-entrar'> <a href='/frontend/cadastrar-entrar.html'>Cadastrar | Entrar</a> </li></ul>"

const authenticated = async () => {
  
  let url_authenticated = 'http://localhost:3000/authenticated'

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
  if (auth.url !== 'http://127.0.0.1:5500/frontend/') {
    window.sessionStorage.clear()
    return formUser.innerHTML = "<ul>  <li id='menu-cadastro-entrar'> <a href='/frontend/cadastrar-entrar.html'>Cadastrar | Entrar</a> </li></ul>";
  }
  formUser.innerHTML = `<ul>  <li id='menu-cadastro-entrar'> Bem-vindo, ${name.split(' ')[0]}! <a href="#" onclick="window.sessionStorage.clear() 
    window.location.reload()"> Sair </a> </li></ul>`
  
}

document.addEventListener('DOMContentLoaded', authenticated)