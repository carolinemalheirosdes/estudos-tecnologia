let nome1= prompt("Digite o nome do aluno 1: ")
let nota1= Number(prompt("Digite a nota do aluno 1: "))
let nome2= prompt("Digite o nome do aluno 2: ")
let nota2= Number(prompt("Digite a nota do aluno 2: "))
let nome3= prompt("Digite o nome do aluno 3: ")
let nota3= Number(prompt("Digite a nota do aluno 3: "))

let nomes= [nome1, nome2, nome3]
let notas= [nota1, nota2, nota3]

for(let i= 0; i < nomes.length; i++){
    console.log(nomes[i])
}

for(let i= 0; i < notas.length; i++){
    console.log(media[i])
}
    if(notas >= 7){
    console.log("Aluno Aprovado")
}
    else if(notas >= 5){
        console.log("Aluno em recuperação")
    }
    else{
        console.log("Aluno reprovado")
    }
