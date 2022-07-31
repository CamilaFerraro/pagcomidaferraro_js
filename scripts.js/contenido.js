const contenidoDOM = document.querySelector("#contenido")

const URL = `/scripts.js/postres.json`

const retornoPostresContenido = (contenido)=> {
    const {foto, nombre, categoria, precioUnidad} = contenido
    return `<div class="col s12 m6 l3">
                <div class="card z-depth-2">
                    <div class="card-image">
                    <img loading="lazy" src="${foto}" title="${nombre}" width=500px>
                    </div>
                    <div class="card-content black">
                       <p class="yellow-text" width=50px>Categoría: <span class="white-text" width=50%>${categoria}</span></p>
                       <p class="yellow-text">Precio Unidad: <span class="white-text">${precioUnidad}</span></p>
                    </div>
                </div>
            </div>`
}
const retornoPostresError = ()=> {
    return `<div class="center white-text"> 
                <br><br><br><br> 
                <h4>El postre parece no estar disponible.</h4> 
                <br><br> 
                <i class="large material-icons">sentiment_very_dissatisfied</i> 
                <br><br> 
            </div>`
 }

/*fetch(URL)
         .then((response)=> response.json() )
         .then( (data)=> {
            console.table(data)
        })
*/
const obtenerContenido = (URL)=> {
    let postreAmostrar = ""
        fetch(URL)
            .then((response)=> response.json() )
            .then( (data)=> {
                for (let contenido of data)
                    postreAmostrar += retornoPostresContenido(contenido)
                contenidoDOM.innerHTML = postreAmostrar
            })
}