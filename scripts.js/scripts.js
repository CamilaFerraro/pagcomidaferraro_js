const productos = []
const carrito = []

class Producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
    precioFinal() {
        return parseFloat((this.precio).toFixed(2))
    }
   
    
} 

function creoID(){
    return parseInt(Math.random() * 10000)
}

function agregarProducto() {
    let id = creoID()
    let nombre = prompt("Ingresa el nombre del producto:")
    let precio = parseInt(prompt("Ingresa el precio:"))
        productos.push(new Producto(id, nombre, precio))
}

function listarProductos() {
    
   
    let mensaje = ""
    for(let x in productos) {
        mensaje += productos[x].nombre + " " + productos[x].precio +"\n" 
    }
    Swal.fire('LOS POSTRES DISPONIBLES SON: ' + mensaje)
}

function buscarProducto() {
    (async () => {

        const ipAPI = '//api.ipify.org?format=json'
        
        const inputValue = fetch(ipAPI)
          .then(response => response.json())
          .then(data => data.text)
        
        const { value: text } = await Swal.fire({
          title: 'BUSCA TU POSTRE FAVORITO!',
          input: 'text',
          inputValue: inputValue,
          inputPlaceholder: 'Escribe el postre a buscar',
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'DEBES ESCRIBIR ALGO!'
            }
        }
    })
    
        
        if (text) {
          Swal.fire(`EL POSTRE ENCONTRADO ES ${text}`)
        }
    })()
    
    //let aBuscar = prompt("Ingrese el nombre del producto a buscar:")

    //find devuelve la primera coincidencia.
    //filter devuelve una lista de coincidencias.
    let resultado = productos.find((producto)=> producto.nombre.includes(aBuscar)) 
    console.log(resultado)
    let mensaje = ""
    
    mensaje = resultado.nombre +" " + resultado.precio +"\n" 

    if (resultado !== undefined) {
       
        Swal.fire ("Resultado de la búsqueda\n" + mensaje)
    }
}

function generadorAutomatico() {
    productos.push(new Producto(1234, "Docena Alfajores de Maicena", 1200))
    productos.push(new Producto(2345, "Volcán de Chocolate c/u", 200))
    productos.push(new Producto(3456, "Mousse de Chocolate c/u", 180))
}
generadorAutomatico()

function generarCarrito(arrayProducto) {
    carrito.push(arrayProducto)
}
generarCarrito(productos [0]);

function calcularCarrito() {

    let total = carrito.reduce((acc, producto)=> acc + producto.precio, 0)
        console.log("TOTAL DEL CARRITO:", total)
}

//titulo.innerText = "WWW.ELIFERRAROSCATERING.COM"
//slogan.innerText = "Los más ricos postres!!"

const btn = document.querySelector("#btn1")


//btn.addEventListener('click',cambio, true)

btn.addEventListener("click", (e) => {
    
    listarProductos()

    let isActive = false

    if(isActive) {

        btn.classList.add("demo-one")
        isActive = false
    }
    else {
        btn.classList.remove("demo-one")
        btn.classList.add("demo-two")
        isActive = true
    }

})

const btnOne = document.querySelector("#btn2")

btnOne.addEventListener("click", (e) => {
    
    buscarProducto()

    let isActive = false

    if(isActive) {

        btnOne.classList.add("demo-one")
        isActive = false
    }
    else {
        btnOne.classList.remove("demo-one")
        btnOne.classList.add("demo-two")
        isActive = true
    }

})

const btnTwo = document.querySelector("#btn3")

btnTwo.addEventListener("click", (e) => {
    
    calcularCarrito()

    let isActive = false

    if(isActive) {

        btnTwo.classList.add("demo-one")
        isActive = false
    }
    else {
        btnTwo.classList.remove("demo-one")
        btnTwo.classList.add("demo-two")
        isActive = true
    }

})

document.addEventListener("submit", (e)=> {
    e.preventDefault()
    guardarDatosDeUsr()
   // alert (`Gracias por tu pedido!! 🍫 @` + inputNombre.value + inputApellido.value)
    Swal.fire(`Gracias por tu pedido!! 🍫 @` + inputNombre.value + inputApellido.value)
})


const inputNombre = document.querySelector("#nombre")
const inputApellido = document.querySelector("#apellido")
const inputTelefono = document.querySelector("#inputtelefono")
const inputEmail = document.querySelector("#inputEmail4")
const inputAddress = document.querySelector("#inputAddress")
const btnSubmit = document.querySelector("#submit")

let datosDeInput = ""

function guardarDatosDeUsr() {
    const datosDeUsr = {nombre: inputNombre.value,
                        apellido: inputApellido.value,
                        telefono: inputTelefono.value,
                        email: inputEmail.value,
                        address: inputAddress.value,

    } 
    let str = JSON.stringify(datosDeUsr)
    localStorage.setItem("datosDeUsr", str)
}

function recuperoDatosDeUsr() {
    if (localStorage.getItem("datosDeUsr")) {
        const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
            inputNombre.value = datosDeUsr.nombre
            inputApellido.value = datosDeUsr.apellido
            inputTelefono.value = datosDeUsr.telefono
            inputEmail.value  = datosDeUsr.email
            inputAddress.value = datosDeUsr.address
    }    
}
recuperoDatosDeUsr()

/*fetch('https://dashboard.emailjs.com/admin'),
{
    method: 'POST',
    body: JSON.stringify({
        title: 'Formulario',
        body: 'Tu Pedido'
    })

}*/

const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")

const URL = `js/postres.json`

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