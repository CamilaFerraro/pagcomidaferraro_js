
//menu principal

let menu = "Bienvenido a EliFerraros'Catering\n1. Ingresar Datos Cliente\n2. Ingresar Pedido\n3. Salir";
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
