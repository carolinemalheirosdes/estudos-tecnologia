let nome= prompt("Digite o nome do aluno: ")
let nota= Number(prompt("Digite a nota do aluno: "))
    if (nota >=7){
        console.log("Aprovado")
    }
    else if (nota >= 5){
        console.log("Recuperação")
    }
    else{
        console.log("Reprovado")
    }