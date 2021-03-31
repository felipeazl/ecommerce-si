const authenticateUser = async () => {
  let url = 'http://localhost:3000/customers/login'

  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
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
    
    await fetch(url_authenticated, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${response.token}`
      },
    }).then((value) => {
      window.location.href = value.url
    })
  })
}
