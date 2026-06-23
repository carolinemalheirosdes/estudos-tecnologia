let nome= prompt("Digite seu nome")
let idade= Number (prompt("Digite sua idade"))
let empresa= prompt("Digite o nome da empresa onde trabalha")
let cargo= prompt("Digite o cargo que ocupa na empresa")
let salario= Number (prompt("Digite o valor do seu salário"))

let pessoa = {
    nome: nome,
    idade: idade,
    empresa: empresa,
    cargo: cargo,
    salario: salario
}

console.log(`Funcionário: ${pessoa.nome}`)
console.log(`Idade: ${pessoa.idade}`)
console.log(`Nome da empresa: ${pessoa.empresa}`)
console.log(`Cargo: ${pessoa.cargo}`)
console.log(`Salário: ${pessoa.salario}`)