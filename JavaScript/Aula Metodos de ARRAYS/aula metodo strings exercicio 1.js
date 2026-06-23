let nome= "Caroline"
    console.log(nome)
    console.log(nome.toUpperCase()) // Deixa todas as letras maiúsculas
    console.log(nome.toLowerCase()) // Deixa todas as letras minúsculas
    console.log(` Seu nome tem ${nome.length} caracteres`) // Mostra a quantidade de caracteres da string
    console.log(nome.trim()) // Remove os espaços em branco do início e do fim da string
    console.log(nome.includes("a")) // Verifica se a string contém a letra "a"
    console.log(nome.replace("C", "K")) // Substitui a letra "C" por "K"
    console.log(nome.trim()) // Remove os espaços em branco do início e do fim da string
    console.log(nome.charAt(5)) // Mostra o caractere na posição 5 ( quinta letra)
    console.log(nome.substring(0, 5)) // Mostra os caracteres da posição 0 até a posição 5 (primeiras 5 letras)

    let email = "contato.carolmalheiros@gmail.com"
    console.log(email.startsWith("contato")) // Verifica se a string começa com "contato"
    console.log(email.endsWith("gmail.com")) // Verifica se a string termina com "gmail.com"