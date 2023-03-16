function aleatoria(valor, objeto){
    const random = Math.floor((Math.random()*objeto[valor].length))
    return random
}

function wordRandom(tipo){
    listadoObjetos = [
        ['GATO', 'PERRO', 'HORMIGA'],
        ['SALA', 'JARDIN', 'PATIO'],
        ['ARROZ', 'PASTEL', 'FRUTA'],
        ['COMPUTADOR', 'CELULAR','TABLET']
    ]

    switch(tipo) {
        case 'animal': {
            const numAleatorio = aleatoria(0, listadoObjetos)
            return listadoObjetos[0][numAleatorio]
        }
        case 'casa': {
            const numAleatorio = aleatoria(1, listadoObjetos)
            return listadoObjetos[1][numAleatorio]
        }
        case 'comida': {
            const numAleatorio = aleatoria(2, listadoObjetos)
            return listadoObjetos[2][numAleatorio]
        }
        case 'tecnologia': {
            const numAleatorio = aleatoria(3, listadoObjetos)
            return listadoObjetos[3][numAleatorio]
        }
    }
}

wordRandom('casa')