let usuario= prompt("Digite o usuario")
let senha= Number (prompt("Digite a senha: "))
    if(usuario === "admin" && senha === 1234){
        console.log("Acesso permitido")
    }
    else{
        console.log("Acesso Negado")
    }