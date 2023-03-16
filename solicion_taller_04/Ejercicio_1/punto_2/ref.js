function aleatoria(valor){
    random=Math.round((Math.random()*objeto[valor].length))
}

function wordRandom(tipo){
    objeto=[[ 'GATO', 'PERRO', 'HORMIGA'],['SALA', 'JARDIN', 'PATIO'],['ARROZ', 'PASTEL', 'FRUTA'],['COMPUTADOR', 'CELULAR','TABLET']]
    
    if(tipo=='animal'){
        aleatoria(0)
        console.log(objeto[0][random])
    }else if(tipo=='casa'){
        aleatoria(1)
        console.log(objeto[1][random])
    }else if(tipo=='comida'){
        aleatoria(2)
        console.log(objeto[2][random])
    }else if(tipo=='tecnologia'){
        aleatoria(3)
        console.log(objeto[3][random])
    }else{
        alert('categoria no encontrada')
    }
}
wordRandom('animal')