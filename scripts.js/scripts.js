
//menu principal

let menu = "Bienvenido a 🍦Eli Ferraro's Catering🍦\n1. Ingresar Datos Cliente\n2. Ingresar Pedido\n3. Salir";
let correrPrograma = true;

do {
    let opcion = parseInt(prompt (menu))
    
    switch (opcion) {
        case 1:
            DatosCliente ();
            break;
        case 2:
            pedidoCliente ();
            break;
        case 3:
            correrPrograma = false;
            break;
        default:
            alert ("Debe seleccionar una opcion valida")
            break;
        }

}while(correrPrograma);

//Tomar datos del cliente

let nombre;

function DatosCliente () {
   let nombre = prompt ("Ingresar Nombre y Apellido");  
   let telefono = prompt ("Ingrese su numero de telefono"); 
}



//Tomar pedido

function pedidoCliente() {
    let menuPedidoCliente = "Elija su bebida\n1. Champagne\n2. Vino\n3. CocaCola\n4. Sprite\n5. Regresar"
    let producto1 = "Champagne"
    let producto2 = "Vino"
    let producto3 = "CocaCola"
    let producto4 = "Sprite"
    let correrPedido = true
    let pedidoFinal = ""

    do {
        
        let opcionBebida = parseInt(prompt(menuPedidoCliente))
        
        switch (opcionBebida) {
            case 1:
                let edad = prompt ("Ingrese su edad");
                if(edad >= 18) {
                    pedidoFinal = pedidoFinal + producto1 + " - "
                }
                else {
                    alert("Eres menor de edad")
                }
                
                break;
            case 2:      
                let edad2 = prompt ("Ingrese su edad");          
                if(edad2 >= 18) {
                    pedidoFinal = pedidoFinal + producto2 + " - "
                }
                else {
                    alert("Eres menor de edad")
                }
                break;
            case 3:
                pedidoFinal = pedidoFinal + producto3 + " - "
                break;
            case 4:
                pedidoFinal = pedidoFinal + producto4 + " - "
                break;
            case 5:
                alert("Su pedido es: " + pedidoFinal);
                correrPedido = false;
                break;
            default:
                alert ("Debe seleccionar una opcion valida")
                break;
            }
    }while(correrPedido)
}


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

function calcularCarrito() {
    console.clear()
    let total = carrito.reduce((acc, producto)=> acc + producto.importe, 0)
        console.log("TOTAL DEL CARRITO:", total)
}

