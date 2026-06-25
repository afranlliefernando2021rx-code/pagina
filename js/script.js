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
const logoInicio = document.getElementById("logoInicio");
const tituloInicio = document.getElementById("tituloInicio");



const btnInicio = document.getElementById("btnInicio");
const btnSelecciones = document.getElementById("btnSelecciones");
const btnEquipos = document.getElementById("btnEquipos");
const btnCompra = document.getElementById("btnCompra");

function ocultarTodo() {
    inicio.classList.add("d-none");
    selecciones.classList.add("d-none");
    equipos.classList.add("d-none");
    compra.classList.add("d-none");
    detalleItalia.classList.add("d-none");
    detalleBrasil.classList.add("d-none");
    detalleArgentina.classList.add("d-none");

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
tituloInicio.addEventListener("click", () => {
    ocultarTodo();
    inicio.classList.remove("d-none");
});
