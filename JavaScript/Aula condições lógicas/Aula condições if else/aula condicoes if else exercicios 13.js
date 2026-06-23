let usuario = prompt("Digite seu nome: ")
let senha = prompt("Digite sua senha: ")
    if (usuario === "admin" && senha === "1234") {
    alert("Login bem-sucedido!")
} 
    else if (usuario === "user" && senha === "9999") {
    alert("Login bem-sucedido!")
}
    else {
    alert("Login falhou. Verifique seu nome de usuário e senha.")
}   