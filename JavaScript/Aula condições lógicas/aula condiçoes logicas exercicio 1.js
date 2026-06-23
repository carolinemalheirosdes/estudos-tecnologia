let ingresso= confirm("Você tem ingresso?")
let idade= Number(prompt("Digite sua idade: "))

if (ingresso && idade >= 18) {
    console.log("Pode entrar")
}
else if (ingresso && idade >= 13) {     
    console.log("Pode entrar, mas com um adulto")
}
else if (ingresso && idade < 13) {
    console.log("Não pode entrar")
}