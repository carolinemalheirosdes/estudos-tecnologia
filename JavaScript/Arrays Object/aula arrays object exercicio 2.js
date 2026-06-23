let produtos = [ 
    {
        nome: "Notebook",
        preco: 3850
    },

    {
        nome: "televisão",
        preco: 1456
    },

    {
        nome : "celular",
        preco: 2500
    }
]

  for( let i=0; i <produtos.length; i++){
    console.log(`O produto ${produtos[i].nome} custa R$${produtos[i].preco}`)
  }
  