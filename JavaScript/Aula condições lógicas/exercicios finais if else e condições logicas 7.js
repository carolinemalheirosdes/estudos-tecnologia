let idade= Number(prompt("Digite sua idade: "))
let possuiCnh= prompt("Possui CNH?")
    if (idade >= 18 && possuiCnh == "sim"){
        console.log("Pode dirigir")
    }
    else{
    console.log("proibido dirigir")
    }