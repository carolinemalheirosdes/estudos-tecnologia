function media(){

    let prova= Number(prompt("Digite a nota da prova: "))
    let trabalho= Number(prompt("Digite a nota do trabalho:"))
    let atividade= Number(prompt("Digite a nota da atividade: "))
    let media= prova + trabalho + atividade / 3

    if (media >= 7){
        return "Aluno aprovado em Português"
    }

    else if( media >= 5){
        return "Aluno em recuperação"
    }

    else{
        return "Aluno reprovado"
    }
}

console.log(media())