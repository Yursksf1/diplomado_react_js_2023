function circuloArea(radio) {
    return Math.PI * radio * radio
}

function cuadradoArea(lado){
    areaFigura=lado*lado
    return areaFigura
}

function area(figura, data){
    let result = 0
    let areaFigura=0;
    console.log('Voy a calcula el area de la figura: ', figura)
    if(figura=='circulo'){
        radio = data['radio']
        console.log('El radio del ciculo es: ', radio)

        result = circuloArea(radio)

    }else if(figura=='cuadrado'){
        lado = data['lado']
        console.log('El cuadrado de lado: ', lado)
        result = cuadradoArea(lado)

    }else if(figura=='triangulo'){
        function trianguloArea(base,altura){
            areaFigura=(base*altura)/2
        }
        trianguloArea()  
    }else if(figurra=='rectangulo'){
        function rectanguloArea(base,altura){
            areaFigura=base*altura
        }
        rectanguloArea()
    }
    return result
}

data = {
    'radio': 5
}

result = area("circulo", data)
console.log('result', result)


console.log(area("circulo", {'radio': 5}))
console.log(area("circulo", {'radio': 15}))
console.log(area("circulo", {'radio': 35}))
console.log(area("circulo", {'radio': 45}))


console.log(area("cuadrado", {'lado': 7}))
console.log(area("cuadrado", {'lado': 70}))
