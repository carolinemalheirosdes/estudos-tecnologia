let alunos=[
    {
        nome: "João",
        nota: 8
    },

    {
        nome: "Maria",
        nota: 9
    },

    {
        nome: "Paulo",
        nota: 8
    }
]

   for(let i =0; i<alunos.length; i++){
    if(alunos[i].nome === "Paulo"){
        console.log("encontrado")
    }
   }