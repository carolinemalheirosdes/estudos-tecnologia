let usuario = prompt("Digite seu nome: ")
let senha = prompt("Digite sua senha: ")
let administrador = "admin"
senhaAdmin = "admin123"
let usuarioCadastrado = "usuario"
senhaUsuario = "usuario123"

if (usuario === administrador && senha === senhaAdmin) {
    alert("Bem-vindo, administrador!")
} else if (usuario === usuarioCadastrado && senha === senhaUsuario) {
    alert("Bem-vindo, usuário!")
} else {
    alert("Usuário ou senha incorretos.")
}