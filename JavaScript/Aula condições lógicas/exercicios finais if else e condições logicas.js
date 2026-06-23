let login= prompt("Insira o seu login: ")
let password= Number(prompt("Insira sua senha: "))
    if(login === "admin" && password === 1234){
        console.log("Seja bem-vindo administrador")
    }
    else if (login === "usuario" && password === 9999){
        console.log("Bem-vindo usuário")
    }
    else {
        console.log("Acesso negado")
    }