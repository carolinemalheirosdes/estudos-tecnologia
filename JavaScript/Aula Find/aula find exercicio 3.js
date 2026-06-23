let filmes = [
    {
        nome: "Matrix",
        ano: 1999
    },
    {
        nome: "Constantine",
        ano: 2005
    },
    {
        nome: "Batman",
        ano: 2022
    }
]

    let filmesFavoritos = filmes.find (filme => filme.nome === "Constantine")

        console.log(filmesFavoritos)