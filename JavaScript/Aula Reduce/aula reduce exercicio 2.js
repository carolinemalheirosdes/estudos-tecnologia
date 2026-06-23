let vendas = [100, 250, 80, 300]

    let totalvendas = vendas.reduce((acumulador, numero) => {
        return acumulador + numero 
    }, 0)

        console.log(totalvendas)