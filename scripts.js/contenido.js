const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")

const URL = `../scripts.js/postres.json`

const retornoPostres = (contenido)=> {
    const {nombre, categoria, precioUnidad} = contenido
    return `<div class="col s12 m6 l3">
                <div class="card z-depth-2">
                    <div class="card-image">
                       <img loading="lazy" nombre="${nombre}">
                    </div>
                    <div class="card-content black">
                       <p class="yellow-text">categoria: <span class="white-text">${categoria}</span></p>
                       <p class="yellow-text">precioUnidad: <span class="white-text">${precioUnidad}</span></p>
                    </div>
                </div>
            </div>`
}

fetch(URL)
         .then((response)=> response.json() )
         .then( (data)=> {
            console.table(data)
        })

const obtenerContenido = (URL)=> {
    let postreAmostrar = ""
        fetch(URL)
            .then((response)=> response.json() )
            .then( (data)=> {
                for (contenido of data)
                    postreAmostrar += retornoPostres(contenido)
                    contenidoDOM.innerHTML = postreAmostrar
                })
            .finally(()=> cargandoDOM.innerHTML = "")
}