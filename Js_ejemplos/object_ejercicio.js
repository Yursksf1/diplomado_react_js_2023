trabajadores = [
    {
       "area":"casa",
       "nombre":"carlos",
       "usuario":"carlos",
       "email":"carlos@gmail.com",
       "edad":"15"
    },
    {
       "area":"casa",
       "nombre":"marcos",
       "usuario":"marcos",
       "email":"marcos@gmail.com",
       "edad":"16"
    },
    {
       "area":"oficina",
       "nombre":"antonio",
       "usuario":"antonio",
       "email":"antonio@gmail.com",
       "edad":"16"
    }
 ]

puestosTrabajoBase = {
    "casa": [
        {
            "nombre":"carlos",
            "usuario":"carlos",
            "email":"carlos@gmail.com",
            "edad":"15"
         },
         {
            "nombre":"marcos",
            "usuario":"marcos",
            "email":"marcos@gmail.com",
            "edad":"16"
         },
    ],
    'oficina': [
        {
            "nombre":"antonio",
            "usuario":"antonio",
            "email":"antonio@gmail.com",
            "edad":"16"
         }
    ]
}


 tabla = document.getElementById('tabla_1')

 var x
 trabajadores.map(trabajador => {
    x = document.createElement("TR");  
    var td = document.createElement("TD");
    var td_area = document.createTextNode(trabajador.area);
    td.appendChild(td_area);
    x.appendChild(td);

    var td = document.createElement("TD");
    var td_nombre = document.createTextNode(trabajador.nombre);
    td.appendChild(td_nombre);
    x.appendChild(td);

    var td = document.createElement("TD");
    var td_usuario = document.createTextNode(trabajador.usuario);
    td.appendChild(td_usuario);
    x.appendChild(td);

    var td = document.createElement("TD");
    var td_email = document.createTextNode(trabajador.email);
    td.appendChild(td_email);
    x.appendChild(td);

    var td = document.createElement("TD");
    var td_edad = document.createTextNode(trabajador.edad);
    td.appendChild(td_edad);
    x.appendChild(td);
    tabla.appendChild(x);

 })
 tabla.appendChild(x);


 
puestosTrabajo = {}
trabajadores.map(trabajador =>{
    area = trabajador.area
    if (!puestosTrabajo[area]) {
        puestosTrabajo[area] = []
    }
    puestosTrabajo[area].push(
        trabajador
    )
})

console.log('puestosTrabajo', puestosTrabajo)
tabla = document.getElementById('tabla')

for (const [key, value] of Object.entries(puestosTrabajo)) {
    console.log(`${key}: ${value}`);
    console.log(value.length)
    rowspanLength = value.length
    x = document.createElement("TR");  
    var td = document.createElement("TD");
    td.setAttribute("rowspan", rowspanLength)

    var td_area = document.createTextNode(key);
    td.appendChild(td_area);
    x.appendChild(td);

    value.map((trabajador, index ) => {
        if (index>0) {
            tabla.appendChild(x);
            x = document.createElement("TR");  
        }
        var td = document.createElement("TD");
        var td_nombre = document.createTextNode(trabajador.nombre);
        td.appendChild(td_nombre);
        x.appendChild(td);
    
        var td = document.createElement("TD");
        var td_usuario = document.createTextNode(trabajador.usuario);
        td.appendChild(td_usuario);
        x.appendChild(td);
    
        var td = document.createElement("TD");
        var td_email = document.createTextNode(trabajador.email);
        td.appendChild(td_email);
        x.appendChild(td);
    
        var td = document.createElement("TD");
        var td_edad = document.createTextNode(trabajador.edad);
        td.appendChild(td_edad);
        x.appendChild(td);    
     })
     tabla.appendChild(x);

  }