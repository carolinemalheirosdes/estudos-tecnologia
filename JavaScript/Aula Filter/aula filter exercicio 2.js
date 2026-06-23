let cidades= [
    "Santos",
    "Goiania",
    "Sao Paulo",
    "Curitiba",
    "Rio de Janeiro",
    "Belo Horizonte",
]
 let cidadesNomes= cidades.filter(cidade => cidade.length > 7)

  console.log(cidadesNomes)