let alunos = [
    {
        nome: "Pedro",
        nota: 9,
        nota2: 7,
        nota3: 8,
        nota4: 6        
    },
]

    let soma = 0

    for(let i= 0; i <alunos.length; i++){
        soma = soma + alunos[i]. nota
    }

    let media = soma / alunos.length

    console.log(media)
