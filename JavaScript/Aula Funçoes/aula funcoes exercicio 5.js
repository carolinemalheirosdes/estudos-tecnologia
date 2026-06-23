function parouImpar(){
    let numero= Number(prompt("Digite um numero: "))

    if (numero % 2 == 0){
        return "Numero par"
    }

    else{
        return "Numero impar"
    }
}

    console.log(parouImpar())