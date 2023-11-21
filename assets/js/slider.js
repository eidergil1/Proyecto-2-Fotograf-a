/* DECLARACIÓN DE VARIABLES */


var numFotos = 12;/* número total de fotos para el slider */
var ordenPrincipal, ordenSiguiente;
var intervalo, temporizador;
var teimpoEspera = 5000;

const flechaIzd = document.getElementById("flechaIzd");
const flechaDer = document.getElementById("flechaDer");
const fotoActiva = document.getElementById("fotoActiva");

console.log(flechaIzd);
console.log(fotoActiva);

/* CÓDIGO PARA LA ACCIÓN DE LAS FLECHAS */

/* ESCUCHAMOS CLICK EN LA FLECHA IZQUIERDA */
flechaIzd.addEventListener("click", function(){
ordenPrincipal = fotoActiva.getAttribute("orden")
ordenPrincipal = Number(ordenPrincipal);

if(ordenPrincipal===1){
ordenSiguiente = numFotos;
}else{
ordenSiguiente = ordenPrincipal-1;
}
fotoActiva.src=`./assets/img/slider${ordenSiguiente}_2560.jpg`;
fotoActiva.setAttribute("orden",ordenSiguiente);
})


