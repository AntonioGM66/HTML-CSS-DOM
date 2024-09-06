// Datos de los productos
const productos = [
    { nombre: "Aqua", precio: 200 },
    { nombre: "Emoción", precio: 180 },
    { nombre: "Alegría", precio: 160 },
    { nombre: "Frescura", precio: 150 }
];

// Datos de los vendedores
const vendedores = [
    { nombre: "Juana", ventas: [0, 0, 0, 0], total: 0 },
    { nombre: "Pedro", ventas: [0, 0, 0, 0], total: 0 }
];

// Función para registrar ventas
function registrarVentas() {
    vendedores.forEach((vendedor, index) => {
        productos.forEach((producto, i) => {
            let cantidad = prompt(`Ingrese la cantidad de ${producto.nombre} vendidos por ${vendedor.nombre}:`);
            
            // Validar si es un número
            if (isNaN(cantidad) || cantidad === null || cantidad === "") {
                alert("Por favor, ingrese un número válido.");
            } else {
                vendedores[index].ventas[i] = parseInt(cantidad);
                vendedores[index].total += parseInt(cantidad) * producto.precio;
            }
        });
    });
}

// Función para calcular y mostrar los resultados
function calcularResultados() {
    vendedores.forEach(vendedor => {
        console.log(`Ventas de ${vendedor.nombre}:`);
        vendedor.ventas.forEach((venta, index) => {
            console.log(`  ${productos[index].nombre}: ${venta} unidades`);
        });
        console.log(`Total recaudado por ${vendedor.nombre}: ${vendedor.total} USD`);
    });

    // Determinar el empleado del mes
    if (vendedores[0].total > vendedores[1].total) {
        console.log(`El empleado del mes es ${vendedores[0].nombre} con ${vendedores[0].total} USD.`);
    } else if (vendedores[0].total < vendedores[1].total) {
        console.log(`El empleado del mes es ${vendedores[1].nombre} con ${vendedores[1].total} USD.`);
    } else {
        console.log("¡Es un empate entre Juana y Pedro!");
    }
}
