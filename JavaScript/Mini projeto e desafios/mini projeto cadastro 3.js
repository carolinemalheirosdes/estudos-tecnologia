let alunos= []

alunos.push(prompt("Digite o nome do aluno 1: "))
alunos.push(prompt("Digite o nome do aluno 2: "))
alunos.push(prompt("DIgite o nome do aluno 3: "))

    for( let i = 0; i < alunos.length; i++){

        console.log(`Aluno ${i + 1}: ${alunos[i]} `)
    }