function notas(n1, n2, n3){

    let media = (n1 + n2 + n3) / 3

    console.log("Média:", media)

    if(media >= 7){
        return "Aluno aprovado"
    }
    else if(media >= 5){
        return "Aluno em recuperação"
    }
    else{
        return "Aluno reprovado"
    }
}

let aluno = prompt("Digite o nome do aluno:")
let n1 = Number(prompt("Digite a nota 1: "))
let n2 = Number(prompt("Digite a nota 2: "))
let n3 = Number(prompt("Digite a nota 3: "))

console.log("Aluno:", aluno)
console.log(notas(n1, n2, n3))