let idade = 25
let acompanhante = true
let autorizacao = false

if (idade >= 18 || (acompanhante && autorizacao)) { 
    console.log("Entrada permitida")
} else {
    console.log("Entrada negada")
}