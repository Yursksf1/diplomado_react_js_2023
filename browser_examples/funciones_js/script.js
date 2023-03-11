
function AddTitle(message){
    document.getElementById("title").textContent = message
}

function AddSubTitle(message){
    document.getElementById("sub-title").textContent = message
}



function init(){    
    console.log("esta funcion se ejecuta cuando termina de cargar el body")
    AddTitle("Este es mi Titulo")
    AddSubTitle("este subtutilo cambiado con Js")
}

window.onload = (evnt) => {
    init()
};