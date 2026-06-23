function calculadora(numero1, numero2, operacao) {

    if (operacao === "+") {
        return numero1 + numero2
    }
    else if (operacao === "-") {
        return numero1 - numero2
    }
    else if (operacao === "*") {
        return numero1 * numero2
    }
    else if (operacao === "/") {
        return numero1 / numero2
    }
    else {
        return "Operação inválida"
    }
}

console.log(calculadora(10, 5, "+")) // 15
console.log(calculadora(10, 5, "-")) // 5
console.log(calculadora(10, 5, "*")) // 50
console.log(calculadora(10, 5, "/")) // 2