let funcionarios = [ 
    { nome: "Pedro",
        Cargo: "Assistente de RH",
        salario: 2500 
    },
    { 
        nome: "Leonardo",
        Cargo: "Office Boy",
        salario: 1800
    },
    {
        nome: " Santiago",
        Cargo: "Mensageiro",
        salario: 1800
   }
]

let nomeFuncionarios = funcionarios.map(funcionario => funcionario.nome)
console.log(`Esses são os funcionários da empresa M.A ${nomeFuncionarios}`)

