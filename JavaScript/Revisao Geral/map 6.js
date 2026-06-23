let pessoas = [
    { nome: "Leonardo" },
    { nome: "Sabrina" },
    { nome: "Felipe" }
]

let nomesMaiusculos = pessoas.map(pessoa => pessoa.nome.toUpperCase())

console.log(`este é os funcionários ${nomesMaiusculos}`)
