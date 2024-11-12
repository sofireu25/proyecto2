let total=0
let eleccionUsuario = ""
const sumarTotal =(precio)=> total += precio
const bienvenidaUsuario = () =>{
    eleccionUsuario = prompt(
        `Hola, estás en un simulador de carrito, los productos que ofrecemos son:
        
    .Churros Festivos: $12000
    .Bocaditos: $8000
    .Churro Arcoíris: $10000
    .Churros Clasicos: $6000
    
    Escribe el nombre del producto que deseas llevar`
    )
}
const recuentoMensaje= (producto)=>{
eleccionUsuario = prompt (`Has elegido unos $(producto). Su nuevo total calculado es: $ ${total} 
    ¿Deseas algo más? Como:
    .Churros Festivos: $12000
    .Bocaditos: $8000
    .Churro Arcoíris: $10000
    .Churros Clasicos: $6000

    Si deseas terminar tu compra escribe la palabra comprar, de lo contrario ingresa el nombre de tu producto:
    `)
}
const mostrarTotalfinal = () =>{
    alert("El valor a pagar por tu compra es de $" + total)
    return total
}
const simuladorCarrito = () =>{

    bienvenidaUsuario()
    while(eleccionUsuario != "comprar"){

        
        switch(eleccionUsuario){
            case "Churros Festivos":
                sumarTotal(12000)
                recuentoMensaje("Churros Festivos")
                break

            case "Bocaditos":
                sumarTotal(8000)
                recuentoMensaje("Bocaditos")
                break
            
            case "Churro Arcoíris":
                sumarTotal(10000)
                recuentoMensaje("Churro Arcoíris")
                break
                
            case "Churros Clasicos":
                sumarTotal(6000)
                recuentoMensaje("Churros Clasicos")
                break
            
            default: eleccionUsuario = prompt("Ups no reconocemos este comando, ingresa el nombre de tu producto o `comprar` para finalizar")
                break    
        }
    }

    mostrarTotalfinal()
}

simuladorCarrito()

const productos=[   { nombre: "Churros Festivos", precio: 12000 },
    { nombre: "Bocaditos", precio: 8000 },
    { nombre: "Churro Arcoíris", precio: 10000 },
    { nombre: "Churros Clasicos", precio: 6000 },
];

const productoEncontrado = productos.find(p => p.nombre === eleccionUsuario);

