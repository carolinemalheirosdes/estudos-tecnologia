let numeros = [5, 10, 15, 20]


let soma = numeros.reduce((acumulador, numero) => {

    return acumulador + numero

}, 0)

    console.log(soma)