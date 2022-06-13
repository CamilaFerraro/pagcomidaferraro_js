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
    console.table(productos)
    alert ("Los productos disponibles son: ", productos)
}

function buscarProducto() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:").toUpperCase()
    let resultado = productos.find((producto)=> producto.nombre.includes(aBuscar)) 
    if (resultado !== undefined) {
        console.clear()
        console.table(resultado) 
    }
}

function generadorAutomatico() {
    productos.push(new Producto(1234, "Docena Alfajores de Maicena", 500))
    productos.push(new Producto(2345, "Volcán de Chocolate", 200))
    productos.push(new Producto(3456, "Mousse de Chocolate", 150))
}
generadorAutomatico()

function generarCarrito() {
    carrito.push(new Producto(1234, "NOTEBOOK EXO E17", 29950))
    carrito.push(new Producto(2345, "MACBOOK AIR 13", 249900))
    carrito.push(new Producto(3456, "LENOVO IDEAPAD 13", 199949))
}
generarCarrito()

function calcularCarrito() {
    console.clear()
    let total = carrito.reduce((acc, producto)=> acc + producto.importe, 0)
        console.log("TOTAL DEL CARRITO:", total)
}

