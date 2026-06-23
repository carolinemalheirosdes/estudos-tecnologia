let produtos=[
    "Mouse",
    "Teclado",
    "Notebook",
    "Cabo de rede",
    "Cabo USB",
    "Monitor",
    "Impressora",
]

    produtos.push("Webcam") // Adiciona um item no final do array
    produtos.pop('Teclado') // Remove o último item do array
    produtos.unshift("fone de ouvido") // Adiciona um item no início do array
    produtos.shift("fone de ouvido")
    produtos.splice(2,1) // Remove um item específico do array, no caso o "Notebook"
    produtos.splice(2, 0, 'Cadeira gamer') // Adiciona um item específico do array, no caso a "Cadeira gamer" na posição 2
    produtos.splice(4, 1, "Cabo USB")  // Substitui um item específico do array, no caso o "Cabo de rede" pelo "Cabo USB"
    produtos.includes("Monitor") // Verifica se um item específico existe no array, no caso o "Monitor" tem que colocar um console.log para mostrar o resultado
    produtos.indexOf("Impressora") // Retorna o índice de um item específico do array, no caso a "Impressora" tem que colocar um console.log para mostrar o resultado
    
    console.log(produtos)