let alunos = [
    {
        nome: "Ana",
        nota: 8
    },
    {
        nome: "Pedro",
        nota: 6
    },
    {
        nome: "Maria",
        nota: 10
    },
    {
        nome: "João",
        nota: 7
    }
]

    let aprovadoAluno = alunos.find (aluno => aluno.nome === "Pedro")

        console.log(aprovadoAluno)