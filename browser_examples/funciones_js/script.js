
function AddTitle(message){
    document.getElementById("title").textContent = message
}

function AddSubTitle(message){
    document.getElementById("sub-title").textContent = message
}

function ImprimeSaludo(){
    console.log("hola")

}


function init(){    
    console.log("esta funcion se ejecuta cuando termina de cargar el body")
    AddTitle("Este es mi Titulo")
    AddSubTitle("este subtutilo cambiado con Js")
}

window.onload = (evnt) => {
    init()
};

console.log('1')
console.log('2')
setTimeout(ImprimeSaludo, 2000);

console.log('3')
setTimeout(() => console.log('4'), 1000);
console.log('5')
