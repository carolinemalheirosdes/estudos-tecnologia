let numeros = [
    {
        nome: 'Paulo',
        salario: 2500
    },
    {
        nome: 'Jorge',
        salario: 1250
    },
    {
        nome: 'Débora',
        salario: 3500
    }
]

let maiores = numeros.filter(pessoa => pessoa.salario > 2000)

console.log(maiores)