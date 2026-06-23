let produtos = [
    {
        nome: "Mouse",
        preco: 50
    },
    {
        nome: "Teclado",
        preco: 120
    },
    {
        nome: "Monitor",
        preco: 800
    }
]

    let produtosEstoque = produtos.find(produto => produto.nome === "Mouse")
        console.log(produtosEstoque)