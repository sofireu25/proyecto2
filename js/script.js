/*let total=0
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

/*const productos=[   { nombre: "Churros Festivos", precio: 12000 },
    { nombre: "Bocaditos", precio: 8000 },
    { nombre: "Churro Arcoíris", precio: 10000 },
    { nombre: "Churros Clasicos", precio: 6000 },
];*/

/*const productoEncontrado = productos.find(p => p.nombre === eleccionUsuario);*/

const productos = [
    { id: 1, nombre: 'Churros Festivos', precio: 12000, imagen: '../assets/churros festivos.jpg' },
    { id: 2, nombre: 'Bocaditos', precio: 8000, imagen: '../assets/bocaditos.jpg' },
    { id: 3, nombre: 'Churro Arcoíris', precio: 10000, imagen: '../assets/churro arcoiris.jpg' },
    { id: 4, nombre: 'Churros Clásicos', precio: 6000, imagen: '../assets/churros clasicos.jpg' },
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Renderizar los productos
const renderizarProductos = () => {
    const productosContainer = document.querySelector('.productsMain');
    productosContainer.innerHTML = `
        <h1>Productos</h1>
        <section class="productos-grid"></section>
    `;

    const productosGrid = productosContainer.querySelector('.productos-grid');

    productos.forEach(producto => {
        const productoHTML = `
            <article class="artP">
                <h2>${producto.nombre}</h2>
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <p>Precio: $${producto.precio}</p>
                <button class="btn-agregar" data-id="${producto.id}" aria-label="Agregar ${producto.nombre} al carrito">Agregar al carrito</button>
            </article>
        `;
        productosGrid.innerHTML += productoHTML; // Agregamos los productos al contenedor
    });

    // Agregar eventos a los botones
    document.querySelectorAll('.btn-agregar').forEach(btn =>
        btn.addEventListener('click', () => agregarAlCarrito(Number(btn.dataset.id)))
    );
};

// Agregar un producto al carrito
const agregarAlCarrito = (idProducto) => {
    const producto = productos.find(p => p.id === idProducto);

    const productoEnCarrito = carrito.find(item => item.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito();
    actualizarCarrito();
};

// Actualizar el carrito
const actualizarCarrito = () => {
    const cantidadTotal = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const precioTotal = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

    document.getElementById('contador-carrito').innerText = cantidadTotal; // Actualiza el badge
    document.getElementById('cantidad-productos').innerText = cantidadTotal;
    document.getElementById('total').innerText = precioTotal;

    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const productoLi = document.createElement('li');
        productoLi.textContent = `${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio * producto.cantidad}`;
        listaCarrito.appendChild(productoLi);
    });
};

// Guardar el carrito en LocalStorage
const guardarCarrito = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

// Lógica para mostrar/ocultar el carrito
const toggleCarrito = () => {
    console.log('Carrito toggled'); // Verificar en la consola
    const carritoElement = document.getElementById('carrito');
    
    if (carritoElement.classList.contains('d-none')) {
        carritoElement.classList.remove('d-none');
    } else {
        carritoElement.classList.add('d-none');
    }
};



// Inicializar
const inicializar = () => {
    renderizarProductos();
    actualizarCarrito();

    // Añadir evento al icono del carrito
    document.getElementById('icono-carrito').addEventListener('click', toggleCarrito);
};

inicializar();