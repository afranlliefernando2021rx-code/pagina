const inicio = document.getElementById("inicio");
const selecciones = document.getElementById("selecciones");
const equipos = document.getElementById("equipos");
const compra = document.getElementById("compra");
const detalleItalia = document.getElementById("detalleItalia");
const imgItalia = document.getElementById("imgItalia");
const volverItalia = document.getElementById("volverItalia");
const detalleBrasil = document.getElementById("detalleBrasil");
const detalleArgentina = document.getElementById("detalleArgentina");
const imgBrasil = document.getElementById("imgBrasil");
const imgArgentina = document.getElementById("imgArgentina");
const volverBrasil = document.getElementById("volverBrasil");
const volverArgentina = document.getElementById("volverArgentina");
const logoInicio = document.getElementById("logoInicio")
const detalleRojoBoca = document.getElementById("detalleRojoBoca");
const detalleRiver = document.getElementById("detalleRiver");
const detalleBarcelonaReal = document.getElementById("detalleBarcelonaReal");
const imgIndependiente = document.getElementById("imgIndependiente");
const imgRiver = document.getElementById("imgRiver");
const imgBarcelona = document.getElementById("imgBarcelona");
const volverRojoBoca = document.getElementById("volverRojoBoca");
const volverRiver = document.getElementById("volverRiver");
const volverBarcelonaReal = document.getElementById("volverBarcelonaReal");


const btnInicio = document.getElementById("btnInicio");
const btnSelecciones = document.getElementById("btnSelecciones");
const btnEquipos = document.getElementById("btnEquipos");
const btnCompra = document.getElementById("btnCompra");
const formCompra = document.getElementById("formCompra");
const resumenCompra = document.getElementById("resumenCompra");

const listaCarrito = document.getElementById("listaCarrito");
const total = document.getElementById("total");

let carrito = " ";
let precioTotal = 0;
const btnItalia = document.getElementById("btnItalia");
btnItalia.addEventListener("click", () => {
    carrito += "<li>Italia 1994 - $40.000</li>";
    listaCarrito.innerHTML = carrito;
    precioTotal += 40000;
    total.innerHTML = "Total: $" + precioTotal;
});
const btnBrasil = document.getElementById("btnBrasil");
btnBrasil.addEventListener("click", () => {
    carrito += "<li>Brasil 2002 - $40.000</li>";
    listaCarrito.innerHTML = carrito;
    precioTotal += 40000;
    total.innerHTML = "Total: $" + precioTotal;
});
const btnArgentina = document.getElementById("btnArgentina");
btnArgentina.addEventListener("click", () => {
    carrito += "<li>Argentina 2006 - $40.000</li>";
    listaCarrito.innerHTML = carrito;
    precioTotal += 40000;
    total.innerHTML = "Total: $" + precioTotal;
});
const btnIndependiente = document.getElementById("btnIndependiente");
btnIndependiente.addEventListener("click", () => {
    carrito += "<li>Independiente 1994 - $40.000</li>";
    listaCarrito.innerHTML = carrito;
    precioTotal += 40000;
    total.innerHTML = "Total: $" + precioTotal;
});
const btnBoca = document.getElementById("btnBoca");
btnBoca.addEventListener("click", () => {
    carrito += "<li>Boca 1994 - $40.000</li>";
    listaCarrito.innerHTML = carrito;
    precioTotal += 40000;
    total.innerHTML = "Total: $" + precioTotal;
});
const btnRiver = document.getElementById("btnRiver");
btnRiver.addEventListener("click", () => {
    carrito += "<li>River 1999 - $40.000</li>";
    listaCarrito.innerHTML = carrito;
    precioTotal += 40000;
    total.innerHTML = "Total: $" + precioTotal;
});
const btnBarcelona = document.getElementById("btnBarcelona");
btnBarcelona.addEventListener("click", () => {
    carrito += "<li>Barcelona 2005 - $40.000</li>";
    listaCarrito.innerHTML = carrito;
    precioTotal += 40000;
    total.innerHTML = "Total: $" + precioTotal;
});
const btnReal = document.getElementById("btnReal");
btnReal.addEventListener("click", () => {
    carrito += "<li>Real Madrid 2005 - $40.000</li>";
    listaCarrito.innerHTML = carrito;
    precioTotal += 40000;
    total.innerHTML = "Total: $" + precioTotal;
});


function ocultarTodo() {
    inicio.classList.add("d-none");
    selecciones.classList.add("d-none");
    equipos.classList.add("d-none");
    compra.classList.add("d-none");
    detalleItalia.classList.add("d-none");
    detalleBrasil.classList.add("d-none");
    detalleArgentina.classList.add("d-none");
    detalleRojoBoca.classList.add("d-none");
    detalleRiver.classList.add("d-none");
    detalleBarcelonaReal.classList.add("d-none");

}



btnInicio.addEventListener("click", () => {
    ocultarTodo();
    inicio.classList.remove("d-none");
});
btnSelecciones.addEventListener("click", () => {
    ocultarTodo();
    selecciones.classList.remove("d-none");
});
btnEquipos.addEventListener("click", () => {
    ocultarTodo();
    equipos.classList.remove("d-none");
});
btnCompra.addEventListener("click", () => {
    ocultarTodo();
    compra.classList.remove("d-none");
});
imgItalia.addEventListener("click", () => {
    ocultarTodo();
    detalleItalia.classList.remove("d-none");
});
volverItalia.addEventListener("click", () => {
    ocultarTodo();
    selecciones.classList.remove("d-none");
});
imgBrasil.addEventListener("click", () => {
    ocultarTodo();
    detalleBrasil.classList.remove("d-none");
});
volverBrasil.addEventListener("click", () => {
    ocultarTodo();
    selecciones.classList.remove("d-none");
});
imgArgentina.addEventListener("click", () => {
    ocultarTodo();
    detalleArgentina.classList.remove("d-none");
});
volverArgentina.addEventListener("click", () => {
    ocultarTodo();
    selecciones.classList.remove("d-none");
});
logoInicio.addEventListener("click", () => {
    ocultarTodo();
    inicio.classList.remove("d-none");
});
imgIndependiente.addEventListener("click", () => {
    ocultarTodo();
    detalleRojoBoca.classList.remove("d-none");
});
imgRiver.addEventListener("click", () => {
    ocultarTodo();
    detalleRiver.classList.remove("d-none");
});
imgBarcelona.addEventListener("click", () => {
    ocultarTodo();
    detalleBarcelonaReal.classList.remove("d-none");
});
volverRojoBoca.addEventListener("click", () => {
    ocultarTodo();
    equipos.classList.remove("d-none");
});
volverRiver.addEventListener("click", () => {
    ocultarTodo();
    equipos.classList.remove("d-none");
});
volverBarcelonaReal.addEventListener("click", () => {
    ocultarTodo();
    equipos.classList.remove("d-none");
});
formCompra.addEventListener("submit", function(e){
    e.preventDefault();
    resumenCompra.innerHTML = "<h3>Compra realizada con éxito</h3>" + "<p><strong>Total:</strong> $" + precioTotal + "</p>" + "Gracias por su compra</p>";
});
