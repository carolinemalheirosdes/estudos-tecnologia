let produtos = [
    {
        nome: "Mouse",
        preco: 50
    },
    {
        nome: "Teclado",
        preco: 100
    },
    {
        nome: "Monitor",
        preco: 800
    }
]

    let somaprodutos = produtos.reduce ((acumulador, produto) => {
        return acumulador + produto.preco
    }, 0)

        console.log(somaprodutos)