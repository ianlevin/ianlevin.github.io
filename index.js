var proyectos = []

function agregarAlgo(idDiv, idInput, idOnclick){
    var div = document.getElementById(idDiv)
    
    let br = document.createElement("br")
    div.appendChild(br)

    let input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("id", idInput)
    div.appendChild(input)

    let boton = document.createElement("button")
    boton.innerHTML = "Agregar"
    boton.setAttribute("onclick", idOnclick)
    div.appendChild(boton)

}

function agregarProyectoObjeto(){
    var nombreproyecto = document.getElementById("nombreproyecto").value
    let vectortareas = []
    let proyecto = {
        nombre: nombreproyecto,
        tareas: vectortareas,
        fechavencimiento: null
    }
    proyectos.push(proyecto)

    eliminarHijo("agregarproyecto")
    eliminarHijo("proyectos")

    var div =document.getElementById("agregarproyecto")
    
    let br = document.createElement("br")
    div.appendChild(br)

    let divproyectos = document.getElementById("proyectos")
    for(let i = 0; i<proyectos.length; i++){
        let boton = document.createElement("button")
        boton.setAttribute("onclick", `verDetalleProyecto(${i})`)
        boton.setAttribute("id", i)
        boton.innerHTML = proyectos[i].nombre

        let br0 = document.createElement("br")
        divproyectos.appendChild(boton)
        divproyectos.appendChild(br0)
    }
}

function verDetalleProyecto(idproyecto){
    eliminarHijo("proyectos")

    let divproyectos = document.getElementById("proyectos")
    let h3 = document.createElement("h3")
    h3.innerHTML = proyectos[idproyecto].nombre
    divproyectos.appendChild(h3)

    let br = document.createElement("br")
    divproyectos.appendChild(br)

    let botonAgregarTarea = document.createElement("button")
    botonAgregarTarea.setAttribute("onclick", `agregarAlgo('proyectos', 'nombretarea', 'agregarTarea(${idproyecto})')`)
    botonAgregarTarea.innerHTML = "Agregar tarea"
    divproyectos.appendChild(botonAgregarTarea)

    let ul = document.createElement("ul")
    divproyectos.appendChild(ul)


    for(let i = 0; i<proyectos[idproyecto].tareas.length; i++){

        if(proyectos[idproyecto].tareas[i].estado == true){
            let li = document.createElement("li")
            li.setAttribute("id", i)
            ul.appendChild(li)
                
            let btn = document.createElement("input")
            let texto = document.createTextNode(proyectos[idproyecto].tareas[i].texto)
            li.appendChild(texto)

            btn.setAttribute("type", "checkbox")
            btn.setAttribute("id", `ck${i}`)
            btn.setAttribute("onclick", `tachar(${i}, ${idproyecto})`)
            li.appendChild(btn)

            if(proyectos[idproyecto].tareas[i].fechavencimiento == null){
                let input = document.createElement("input")
                input.setAttribute("type", "date")
                input.setAttribute("id", "iddescripcion")
                li.appendChild(input)

                let boton = document.createElement("button")
                boton.innerHTML = "Agregar"
                boton.setAttribute("onclick", `agregarFecha(${i}, ${idproyecto})`)
                li.appendChild(boton)
            }

            
        }else{
            let li = document.createElement("li")
            li.setAttribute("id", i)
            ul.appendChild(li)
                
            let btn = document.createElement("input")
            li.innerHTML = `<del>${proyectos[idproyecto].tareas[i].texto}</del>`

            btn.setAttribute("type", "checkbox")
            btn.setAttribute("id", `ck${i}`)
            btn.setAttribute("onclick", `tachar(${i}, ${idproyecto})`)
            btn.checked = true
            li.appendChild(btn)
        }

        

    }
        let buscador = document.createElement("input")

        buscador.setAttribute("placeholder", "Busca por fecha de vencimiento")
        buscador.setAttribute("id", "buscador")
        buscador.setAttribute("type", "date")
        
        let botonbuscador = document.createElement("button")
        botonbuscador.setAttribute("onclick", `buscarFecha(${idproyecto})`)
        botonbuscador.innerHTML = "Buscar"

        divproyectos.appendChild(buscador)
        divproyectos.appendChild(botonbuscador)
}

function agregarTarea(idProyecto){
    let tarea = document.getElementById("nombretarea").value
    let objetoTarea = {
        texto: tarea,
        estado: true,
        fechavencimiento: null
    }
    proyectos[idProyecto].tareas.push(objetoTarea)

    eliminarHijo("proyectos")
    verDetalleProyecto(idProyecto)
}

function verProyectos(){
    eliminarHijo("agregarproyecto")
    eliminarHijo("proyectos")

    let divproyectos = document.getElementById("proyectos")

    for(let i = 0; i<proyectos.length; i++){
        let boton = document.createElement("button")
        boton.setAttribute("onclick", `verDetalleProyecto(${i})`)
        boton.setAttribute("id", i)
        boton.innerHTML = proyectos[i].nombre

        let br0 = document.createElement("br")
        divproyectos.appendChild(boton)
        divproyectos.appendChild(br0)
    }
}


function tachar(id, idproyecto){
    if((proyectos[idproyecto].tareas[id].estado) == true){
        proyectos[idproyecto].tareas[id].estado = false
        
        elemento = document.getElementById(id)
        elemento.innerHTML = `<del>${proyectos[idproyecto].tareas[id].texto}</del>`

        let btn = document.createElement("input")
        btn.setAttribute("type", "checkbox")
        btn.setAttribute("id", `ck${id}`)
        btn.setAttribute("onclick", `tachar(${id}, ${idproyecto})`)
        btn.checked = true
        document.getElementById(id).appendChild(btn)

    }else{
        proyectos[idproyecto].tareas[id].estado = true

        elemento = document.getElementById(id)
        elemento.innerHTML = `${proyectos[idproyecto].tareas[id].texto}`   
        
        let btn = document.createElement("input")
        btn.setAttribute("type", "checkbox")
        btn.setAttribute("id", `ck${id}`)
        btn.setAttribute("onclick", `tachar(${id}, ${idproyecto})`)
        btn.checked = false
        document.getElementById(id).appendChild(btn)
    }
    

}

function agregarFecha(id, idproyecto){
    fecha = document.getElementById("iddescripcion").value
    fechaDate = new Date(fecha)
    proyectos[idproyecto].tareas[id].fechavencimiento = fechaDate


    console.log(proyectos[idproyecto].tareas[id].fechavencimiento)
    verDetalleProyecto(idproyecto)
}

function buscarFecha(idproyecto){
    let fecha = new Date(document.getElementById("buscador").value)
    let listafechas = []

    console.log(fecha)
    console.log(proyectos[idproyecto].tareas[0].fechavencimiento)

    for(let i = 0; i<(proyectos[idproyecto].tareas.length); i++){
        if((proyectos[idproyecto].tareas[i].fechavencimiento).getTime() == fecha.getTime()){
            listafechas.push(i)
        }
    }

    eliminarHijo("proyectos")

    let titulo = document.createElement("h2")
    titulo.innerHTML = "las tareas que tienen de vencimiento esa fecha son:"

    let div = document.getElementById("agregarproyecto")
    div.appendChild(titulo)

    for(let i = 0; i<listafechas.length; i++){
        let a = document.createElement("p")
        a.innerHTML = `${proyectos[idproyecto].tareas[listafechas[i]].texto}`
        div.appendChild(a)
    }
}

function eliminarHijo(padreid)
 {
 var elemento=document.getElementById(padreid);
 while(elemento.hasChildNodes())
	elemento.removeChild(elemento.firstChild);	
 }