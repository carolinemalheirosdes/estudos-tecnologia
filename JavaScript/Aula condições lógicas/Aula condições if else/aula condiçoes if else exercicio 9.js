let login = prompt("Digite seu usuário:")
let senhaDigitada = Number(prompt("Digite sua senha:"))

let usuarioCorreto = "ca_22"
let senhaCorreta = 1234

if (login === usuarioCorreto && senhaDigitada === senhaCorreta) {
    console.log("Acesso concedido")
} else {
    console.log("Usuário ou senha incorretos")
}