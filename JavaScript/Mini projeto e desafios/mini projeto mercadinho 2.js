function calcularTotal(preco,quantidade){

    return preco * quantidade
}

let produto = prompt("Digite o nome do produto")
let quantidade = Number(prompt("Digite a quantidade: "))
let preco = Number(prompt(" Digite o preço do produto: "))

console.log(`Produto: ${produto} `)
console.log(`Quantidade: ${quantidade}`)
console.log(`Valor do produto: ${preco}`)
console.log(`Total: ${calcularTotal(preco,quantidade)}`)
