async function start() {
    let response = await fetch('http://ecommercesi.herokuapp.com/customers/getdata')
  
    let json = await response.json()
  
    let produtos = json['produtos']
  
    let t = 0
    for (const produto of produtos) {
      container.innerHTML +=
        `<div id="produto${t + 1}" class="posts ${produto.color}">
          <div class="post">
          <div class="bg">
            <img class="produto-image" src="${produto.prod_image}" title="${produto.desc}" alt="${produto.title}">
          <div/>
            <div class="content">
              <h2>${produto.title}</h2>
              <p>R$ ${produto.price}</p>
              <div>
              <button class='botao-comprar' onclick="shopping(${t})">Comprar</button>
            </div>
          </div>
        </div>`
      t++
    }
  }
  start()