const productos = []
//const carrito = []

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

function generadorPostres() {
    productos.push(new Producto(1234, "Docena Alfajores de Maicena", 1200))
    productos.push(new Producto(2345, "Volcán de Chocolate", 200))
    productos.push(new Producto(3456, "Mousse de Chocolate", 180))
}
generadorPostres()

class Postre{
    constructor(id, nombre, precio, cantidad){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}

const Postre1 = new Postre(1234, "Docena Alfajores de Maicena", 1200)
const Postre2 = new Postre(2345, "Volcán de Chocolate", 200)
const Postre3 = new Postre(3456, "Mousse de Chocolate", 180)

const arrayPostres = [Postre1, Postre2, Postre3]
const arrayCarrito = [] 

function listarPostres() {
    arrayPostres.forEach( (Postre)=>{
      const listado = `<tr>
                        <td>${Postre.id}</td>
                        <td>${Postre.nombre}</td>
                        <td>${Postre.precio }</td>
                        <td><button class="boton  btn btn-primary" id="${Postre.id}"> AGREGAR </button></td>
                      </tr>`
                    document.querySelector("tbody").innerHTML += listado  
    });    

}
listarPostres()

  const boton = document.querySelectorAll(".boton")

  boton.forEach(elm => {
    elm.addEventListener("click", (e) => {
     let resultado = e.target.id
     busquedaArray(resultado)
    })
 })

 function busquedaArray(id){
    let resultado = arrayPostres.filter(elm => elm.id == id)
    console.log(resultado[0])
    arrayCarrito.push(resultado[0])
    renderizarCarrito(resultado)  
  }

  const carritoRenderizado = document.getElementById("listadoCarrito")

  function renderizarCarrito(obj) {
    obj.forEach(obj =>{
      const listado = document.createElement("li")
      listado.className = "listadoProductos"
      listado.innerHTML += `${obj.nombre}<button type="button" class="btn btn-danger" id="${obj.id}">Eliminar</button>`
      carritoRenderizado.appendChild(listado)
    })
  }

  const botonEliminar = document.getElementsByClassName("btn-danger")


  document.addEventListener("click", (e)=>{
  if(e.target.classList.contains("btn-danger")){
    busquedaArrayEliminar(e.target.id) }

})

  function trueFalsePostres(id) {
    let comprobacionID = arrayPostres.find(elm => elm.id == id)
    if (comprobacionID == undefined) {
      
    } else {
      return trueFalse = true
    }  
}
  
function busquedaArrayEliminar(id){
    let resultado = arrayCarrito.findIndex(elm => elm.id == id) 
      arrayCarrito.splice(resultado, 1)
      carritoRenderizado.removeChild(carritoRenderizado.children[resultado])
      trueFalsePostres(id)
}  


const totalEnModal = document.getElementById("totalEnModal")

function calcularCarrito(){
    let total = arrayCarrito.reduce((acc, elemento) => acc + elemento.precio, 0)
    const textoModal = document.createElement("p")
    textoModal.innerText = "El total de sus postres elegidos en pesos es de: " + total
    totalEnModal.appendChild(textoModal)
}


function PedidoExitoso() {
    if(arrayCarrito.length != 0){
      Swal.fire({
        icon: "success",
        title: "Postres cargados con éxito. Proceda a ingresar sus datos en el formulario de contacto",
      })  
    }
}

const botonConfirmarPedido = document.getElementById("botonConfirmarPedido")
  botonConfirmarPedido.addEventListener("click", ()=>{
    if (arrayCarrito.length != 0) {
      PedidoExitoso()  
      carritoRenderizado.innerHTML = ""
      totalEnModal.innerText = ""
      arrayCarrito.splice(0, arrayCarrito.length)
      return trueFalse = true
    } else {
      totalEnModal.innerText = ""
      Swal.fire({
        icon: "error",
        title: "No hay productos seleccionados",
      })
    }
   
  })

function borrarListado() {
  carritoRenderizado.innerHTML = ""
  totalEnModal.innerText = ""
  
}  
const botonCancelar = document.getElementById("botonCancelar")
botonCancelar.addEventListener("click", ()=>{
   arrayCarrito.splice(0, arrayCarrito.length)
   borrarListado()
   return trueFalse = true
})

const botonCerrar = document.getElementById("botonCerrar")
botonCerrar.addEventListener("click", ()=>{
  arrayCarrito.splice(0, arrayCarrito.length)
  borrarListado()
  return trueFalse = true
})

const botonContinuar = document.getElementById("botonContinuar")
botonContinuar.addEventListener("click", ()=>{
  calcularCarrito()
})

  function busquedaArray(id){
    let resultado = arrayPostres.filter(elm => elm.id == id)
    console.log(resultado[0])
    arrayCarrito.push(resultado[0])
    renderizarCarrito(resultado)  
  }

document.addEventListener("submit", (e)=> {
    e.preventDefault()
    guardarDatosDeUsr()
    //alert (`Gracias por tu pedido!! 🍫 @` + inputNombre.value + inputApellido.value)
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


