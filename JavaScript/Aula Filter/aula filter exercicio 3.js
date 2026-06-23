let produtos = [
    {
        nome: "Notebook",
        preco: 1500
    },
    {
        nome: "Mouse",
        preco: 11
    },
    {
        nome: "Pendrive",
        preco: 50
    },
    {
        nome: "Celular",
        preco: 1800
    }
]

 let produtosCaros = produtos.filter( produto => produto.preco > 100)

  console.log(produtosCaros) 