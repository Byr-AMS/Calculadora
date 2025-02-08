// function numeroFactorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     return n * numeroFactorial (n-1);

// };

console.log(numeroFactorial(5))
function quitarAcento (letra) {
    return letra
    .replace('á', 'a')
    .replace('é', 'e')
    .replace('í', 'i')
    .replace('ó', 'o')
    .replace('ú', 'u')

}

var texto = "El café está en la estación de trenes." 
var nuevoTexto = quitarAcento(texto)
console.log(nuevoTexto)

// var nombreCompleto = (primerNombre = 'Byron', segundoNombre = 'Antonio', primerApellido = 'Meza', segundoApellido = 'Sotomayor') => {
//     return `${primerNombre} ${segundoNombre} ${primerApellido} ${segundoApellido}`;
// };

// console.log(nombreCompleto());

// function nombreCompleto(primerNombre = 'Byron', segundoNombre = '', primerApellido = 'Meza', segundoApellido = '') {
//     return `${primerNombre} ${segundoNombre} ${primerApellido} ${segundoApellido}`;
// }

// var nombreCompleto = nombreCompleto('César', 'Augusto', 'Bolaños', 'Andino');

// console.log(nombreCompleto);

// console.log(nombre);

// document.querySelectorAll('')
// document.getElementsByTagName('')
// document.getElementById
// var caja1 = document.querySelector('span:nth-child(1)');

// var caja = document.querySelectorAll('.caja');
// console.log(caja);

// var cajas = document.querySelectorAll('.caja')
// cajas.forEach((caja, index) => {
//     if (index % 2 === 0) {
//         caja.style.backgroundColor = 'yellow';
//     } else {
//         caja.style.backgroundColor = 'red';
//     }
// });


// for (var i = 0; i < cajas.length; i++) {
//     if (i % 2 === 0) {
//         cajas[i].style.backgroundColor = 'yellow';
//     } else {
//         cajas[i].style.backgroundColor = 'red';
//     }
// }


// var cajaamarilla = document.querySelectorAll('.caja')
// cajaamarilla.forEach ((caja, index) => {
//     if (index % 2 === 0) {
//         caja.style.backgroundColor = 'yellow';
//     }
// });

// var arreglo = [2, 1, 20, 14, 9, 6, 9];
// console.log('arreglo original', arreglo);
// var arregloFiltrado = arreglo.filter(function(valor) {
//     if (valor > 10) {
//         return true;
//     }

//     return false;
// });

// console.log(arregloFiltrado);

// var cajas = [...document.querySelectorAll('.caja')];

// var pares = cajas.filter(function(_, index) {
//     return index % 2 === 0;
// });

// var impares = cajas.filter(function(_, index) {
//     return index % 2 !== 0;
// });

// pares.forEach(function(elemento, indice, arreglo) {
//     elemento.style = 'background-color: purple;';
// });

