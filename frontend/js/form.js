const authenticateUser = async () => {
  let url = 'http://localhost:3000/customers/login'

  let email = document.getElementById('email-entrar').value
  let password = document.getElementById('senha-entrar').value

  let user = {
    email: email,
    password: password
  }
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    redirect: 'follow'

  }).then(usuario => usuario.json()).then(async (response) => {

    if (Object.keys(response)[0] !== 'id') {
      return document.getElementById('retorno').innerHTML = 'Wrong Password'
    }
    document.getElementById('retorno').innerHTML = 'Correct Password'
    let url_authenticated = 'http://localhost:3000/authenticated'

    console.log(response)
    myStorage = window.sessionStorage
    myStorage.setItem('name', response.name);
    myStorage.setItem('id', response.id);
    myStorage.setItem('token', response.token);

    await fetch(url_authenticated, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${response.token}`
      },
    }).then((value) => {
      window.location.href = value.url
    }).catch(err => console.error(err))
  }).catch(err => console.error(err))
}

const createUser = async () => {

  let url = 'http://localhost:3000/customers/signup'


  let name = document.getElementById('nome-cadastrar').value
  let email = document.getElementById('email-cadastrar').value
  let password = document.getElementById('senha-cadastrar').value
  let passwordConfirmation = document.getElementById('confirm-cadastrar').value

  if (password !== passwordConfirmation) {
    return document.getElementById('cadastro-report').innerHTML = 'As senhas são diferentes'
  }
  document.getElementById('cadastro-report').innerHTML = ''
  let data = {
    name: name,
    email: email,
    password: password
  }

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then(response => response.json())
    .then((res) => {

      console.log(res)
    })
    .catch(err => console.error(err))
}