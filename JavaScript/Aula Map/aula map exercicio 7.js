let series = [
    {
        nome: "Supernatural"
    },
    {
        nome: "Berlim"
    },
    {
        nome: "Constantine"
    }
]

let frases= series.map((serie) => {
    return `A série ${serie.nome} é muito boa!`
})

console.log(frases)