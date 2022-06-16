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
        mensaje += productos[x].nombre +" " +productos[x].precio +"\n" 
    }

    alert ("Los productos disponibles son: \n" + mensaje )
}

function buscarProducto() {

    let aBuscar = prompt("Ingrese el nombre del producto a buscar:")

    //find devuelve la primera coincidencia.
    //filter devuelve una lista de coincidencias.
    let resultado = productos.find((producto)=> producto.nombre.includes(aBuscar)) 
    console.log(resultado)
    let mensaje = ""
    
    mensaje = resultado.nombre +" " +resultado.precio +"\n" 
    

    debugger

    if (resultado !== undefined) {
       
        alert ("Resultado de la búsqueda\n" + mensaje)
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
    console.clear()
    let total = carrito.reduce((acc, producto)=> acc + producto.importe, 0)
        console.log("TOTAL DEL CARRITO:", total)
}

