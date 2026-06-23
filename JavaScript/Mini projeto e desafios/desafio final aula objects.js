let nome= prompt("Digite seu nome: ")
let idade= Number(prompt("digite sua idade: "))
let nota1= Number(prompt("digite sua primeira nota: "))
let nota2= Number(prompt("digite sua segunda nota: "))
let nota3= Number(prompt("digite sua terceira nota: "))

function media(nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3
     if (media >= 7){
        console.log("Aprovado")
    }     else{
        console.log("Reprovado")
    }
}


let aluno = {
    nome: nome,
    idade: idade,
    nota1: nota1,
    nota2: nota2,
    nota3: nota3,
}

console.log(`Nome do aluno: ${aluno.nome}`)
console.log(`Idade do aluno: ${aluno.idade}`)
console.log(`Nota 1: ${aluno.nota1}`)
console.log(`Nota 2: ${aluno.nota2}`)
console.log(`Nota 3: ${aluno.nota3}`)
console.log(`Média: ${media()}`)