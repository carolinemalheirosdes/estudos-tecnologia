const parouImpar= (numero) => {
    if(numero % 2 === 0){
        return "Par"
    }
    else{
        return "Ímpar"
    }
}

console.log(parouImpar(2))
console.log(parouImpar(3))