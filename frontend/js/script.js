const authenticateUser = async () => {
  let url = 'http://localhost:3000/customers/login'
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: "carls-f@live.com",
      password: "12345678911"
    })
    

  }).then(user => user.json()).then(res => console.log(res))
}

const createUser = async () => {
let url = 'http://localhost:3000/users/login'
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: "carls-f@live.com",
      password: "123456789"
    })    

  }).then(user => user.json()).then(res => console.log(res))
}