/* DECLARACIÓN DE VARIABLES */


var numFotos = 12;/* número total de fotos para el slider */
var ordenPrincipal, ordenSiguiente;
var intervalo;


var intervalo = window.setInterval(funcion_random,5000)

const flechaIzd = document.getElementById("flechaIzd");
const flechaDer = document.getElementById("flechaDer");
const fotoActiva = document.getElementById("fotoActiva");

console.log(flechaIzd);
console.log(fotoActiva);

/* CÓDIGO PARA LA ACCIÓN DE LAS FLECHAS */

/* ESCUCHAMOS CLICK EN LA FLECHA IZQUIERDA */
flechaIzd.addEventListener("click", function(){
ordenPrincipal = fotoActiva.getAttribute("orden");
ordenPrincipal = Number(ordenPrincipal);

if(ordenPrincipal===1){
ordenSiguiente = numFotos;
}else{
ordenSiguiente = ordenPrincipal-1;
}
fotoActiva.src=`./assets/img/slider${ordenSiguiente}_2560.jpg`;
fotoActiva.setAttribute("orden",ordenSiguiente);

/* temporizador */
clearInterval(intervalo);
crear_intervalo();
})

/* (SI QUEREMOS QUE LA FLCHA IZQUIERDA HAGA ALEATORIO) flechaIzd.addEventListener("click",funcion_random) */

/* ESCUCHAMOS CLICK EN LA FLECHA DERECHA */
flechaDer.addEventListener("click", function(){
    ordenPrincipal = fotoActiva.getAttribute("orden");
    ordenPrincipal = Number(ordenPrincipal);
    
    if(ordenPrincipal===numFotos){
    ordenSiguiente = 1;
    }else{
    ordenSiguiente = ordenPrincipal+1;
    }
    fotoActiva.src=`./assets/img/slider${ordenSiguiente}_2560.jpg`;
    fotoActiva.setAttribute("orden",ordenSiguiente);

    /* temporizador */
    clearInterval(intervalo);
    crear_intervalo();
})

    /* ZONA DE EJECUCIÓN DE IMAGEN RANDOM CUANDO CARGA LA PÁGINA WEB */
funcion_random()

/* ZONA DE FUNCIONES*/
/* FUNCIÓN PARA CAMBIAR LAS FOTOS RANDOM */
function funcion_random(){
    let numAleatorio
    numAleatorio = Number(numAleatorio);  /* TIPAR UNA IMAGEN */
    numAleatorio = Math.random()*numFotos;
    console.log (numAleatorio);
    numAleatorio = Math.ceil(numAleatorio);
    fotoActiva.src = `./assets/img/slider${numAleatorio}_2560.jpg`;
    fotoActiva.setAttribute ("orden",numAleatorio)
}

/* FUNCIÓN PARA CAMBIAR LAS FOTOS RANDOM CADA X SEGUNDOS */
function crear_intervalo(){
    intervalo=window.setInterval(funcion_random,5000)
}
/* CAMBIO DE AUTOMATICO DE IMAGENES CADA X SEGUNDOS */


