let series = [
    {
        nome: "Supernatural",
        temporadas: 15
    },
    {
        nome: "Berlim",
        temporadas: 1
    },
    {
        nome: "Blacklist",
        temporadas: 10
    },
    {
        nome: "Constantine",
        temporadas: 1
    }
]

 let seriesComMaisDeUmaTemporada = series.filter(function(serie){
    return serie.temporadas > 1
 })
    console.log(seriesComMaisDeUmaTemporada)