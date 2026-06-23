let funcionarios = [
    {
        nome: "Paulo",
        salario: 2000
    },
    {
        nome: "Maria",
        salario: 3500
    },
    {
        nome: "João",
        salario: 1800
    }
]

 let funcionariosBempagos = funcionarios.filter(funcionario => funcionario.salario > 2000)

 console.log(funcionariosBempagos) 