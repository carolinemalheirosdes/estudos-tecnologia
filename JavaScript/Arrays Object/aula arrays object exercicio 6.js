let rh= [
    {
        nome: "Paulo",
        Cargo: "Recursos Humanos",
        Salário: 2000
    },

    {
        nome: "Maria",
        Cargo: "TI",
        Salário: 2500
    },

    {
        nome: "João",
        Cargo: "Auxiliar administrativo",
        Salário: 1500
    },

    {
        nome: "Ana",
        Cargo: "departamento pessoal",
        Salário: 2200
    },

    {
        nome: "Carlos",
        Cargo: "Recursos Humanos",
        salário: 2100
    },

    {
        nome: "Fernanda",
        Cargo: "TI",
        Salário: 2700
    },

    {
        nome: "Ricardo",
        Cargo: "Auxiliar administrativo",
        Salário: 1600
    },

    {
        nome: "Sofia",  
        Cargo: "departamento pessoal",
        Salário: 2300
    },

    {
        nome: "Bruno",
        Cargo: "Recursos Humanos",
        Salário: 1900
    },

    {
        nome: "Larissa",
        Cargo: "TI",
        Salário: 2600
    },

    {
        nome: "Mariana",
        Cargo: "Auxiliar administrativo",
        Salário: 1550
    }
]

    for (let i = 0; i < rh.length; i++) {
     console.log(`Funcionário: ${rh[i].nome}`);
        console.log(`Cargo: ${rh[i].Cargo}`);
        console.log(`Salário mensal: ${rh[i].Salário}`);
        console.log("----------------")
    }