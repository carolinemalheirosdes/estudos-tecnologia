let cidades= [
    { "nome": "São Paulo" },
    { "nome": "Rio de Janeiro" },
    { "nome": "Belo Horizonte" }
]

let maiusculos = cidades.map((cidade) => {
    return cidade.nome.toUpperCase()
})

console.log(maiusculos)