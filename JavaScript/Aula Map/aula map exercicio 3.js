let produtos = [
    {
        nome: "Mouse",
        preco: 50
    },
    {
        nome: "Teclado",
        preco: 100
    }
]

    let nomes = produtos.map((produto) => {
    return produto.nome
})

console.log(nomes)