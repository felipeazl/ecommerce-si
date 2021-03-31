const authenticateUser = () => {
  const url = 'http://localhost:3000/customers/login'

  const response = fetch(url, {
    headers: { 'Content-type': 'application/json' },
    body: {
      email: 'carls-f@live.com',
      password: '123456789'
    }
  }).then(user => user.json()).then(res => console.log(res))

}

authenticateUser()