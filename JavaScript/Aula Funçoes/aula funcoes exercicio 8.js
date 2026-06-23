function acesso(){
    let login= prompt("insira seu login: ")
    let senha= Number (prompt("Insira sua senha: "))

    if (login == "admin" && senha == 1234){
        return "Bem-vindo administrador"
    }

    else if(login == "usuariocomum" && senha == 9999){
        return "Bem-vindo Usuário"
    }

    else{
        return "Acesso negado"
    }
}

console.log(acesso())