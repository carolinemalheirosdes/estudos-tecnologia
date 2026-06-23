//mini sistema de RH

let funcionarios= [
    {nome: "Pedro", cargo: "Desenvolvedor", salario: 5000},
    {nome: "Maria", cargo: "Designer", salario: 4000},
    {nome: "João", cargo: "Gerente", salario: 6000},
    {nome: "Ana", cargo: "Desenvolvedor", salario: 5500},
    {nome: "Carlos", cargo: "Analista", salario: 4500}
]

    funcionarios.push({nome: "Lucas", cargo: "Desenvolvedor", salario: 5200}) //adiciona um novo funcionário
    funcionarios.pop({nome: "Maria", cargo: "Designer", salario: 4000}) //remove o último funcionário
    funcionarios.splice(1,1, {nome: "Fernanda", cargo: "Analista", salario: 4800}) //substitui o funcionário na posição 1 por outro

    for(let i=0; i<funcionarios.length; i++){
        console.log(`Os funcionarios da empresa Angelis são: ${funcionarios[i].nome}`)
    }