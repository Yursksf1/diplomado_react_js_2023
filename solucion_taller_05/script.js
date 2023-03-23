document.getElementById("demo").innerHTML = Math.floor(Math.random() * 100);
element_enviar_intento = document.getElementById("enviar_intento")

element_enviar_intento.addEventListener("click", () =>{
    valor_intento = document.getElementById('intento').value
    console.log('estoy enviando un intento', valor_intento)
    }
)

document.getElementById("enviar_formulario").addEventListener("click", () =>{

    console.log('estoy escuchando al formulario')
    const form = document.getElementById('formulario_principal');

    // ✅ Get all form elements
    const formElements = Array.from(form.elements);
    
    formElements.forEach(element => {
      console.log(element.name, element.value);
    });
})