
function getNumber(longitudLista) {
    return  Math.floor(Math.random()*longitudLista)
}

function getLetterRandom(){
    const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
    const longitudLista = alfabeto.length
    const getNumAleatorio = getNumber(longitudLista)
    const randomValue = alfabeto[getNumAleatorio]

    return randomValue
}

letra = getLetterRandom()
console.log('letra', letra)