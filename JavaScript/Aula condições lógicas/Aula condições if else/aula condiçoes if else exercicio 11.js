let valordaCompra= Number (prompt("Insira o valor da compra: "))

if (valordaCompra > 100) {
    let valorDesconto = valordaCompra * 0.10
    let valorFinal = valordaCompra - valorDesconto
    alert("O valor final da compra é: " + valorFinal)
}else {
    alert("O valor final da compra é: " + valordaCompra)
}   