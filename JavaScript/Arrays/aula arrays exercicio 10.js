let numeros = [6, 8, 9, 10]

let maior = numeros[0]
let menor = numeros[0]

for(let i = 0; i < numeros.length; i++){

    if(numeros[i] > maior){
        maior = numeros[i]
    }

    if(numeros[i] < menor){
        menor = numeros[i]
    }
}

console.log("Maior:", maior)
console.log("Menor:", menor)