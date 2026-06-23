let produtos= [
    {nome: "camisa", preco: 50},
    {nome: "calça", preco: 100},
    {nome: "sapato", preco: 150}
]   

    let reajuste = produtos.map((produto) => {

    return {
        nome: produto.nome,
        preco: produto.preco * 20/100 + produto.preco
    }

})

console.log(reajuste)