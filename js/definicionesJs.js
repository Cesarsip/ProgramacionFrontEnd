window.onload = function () {
    alert('Cargando script externo...');
};

function prueba() {
    alert('Cargando script externo...');
    let inputOculto = document.getElementById('input_oculto');
    console.log(inputOculto.value)
    console.log(inputOculto)
};

function cambiar_fondo() {
    document.body.style = 'background-color:black;'
};

function saludar() {
    let input_nombre = document.getElementById('fname')
    alert('Buen día querido ' + input_nombre.value)
};

function validarFormulario(){
    let campoNombre = document.getElementById('fname');

    if (campoNombre.value == ''){
        alert('Campo Nombre es requerido...')
    }
};

// LET se usa para definir VARIABLES
let numero = 265;
test(numero)
// VAR metodo antiguo para definir VARIABLES, debemos idealmente usar LET o CONST
//var numero2 = 2.5;
// CONST se usa para definir CONSTANTES
const color_fondo = "#fff";
// Forma correcta de nombrar variables, camelCase
let fechaNacimiento = '25-08-1975';
// Forma no ajustada a buenas prácticas, funciona pero no es lo recomendado
// Es importante el tipo de letra usado al definir una variable
// porque JS diferencia entre mayúsculas y minúsculas
let FechaNacimiento = "25-08-1975";

alert(); // Esto es un comentario de 1 línea
/*
esto es un comentario
de múltiples líneas
*/
function test(valor){console.log(valor);}

console.log(typeof numero)

numero = 'Hola'
test(numero)

// NBO se puede modificar el VALOR de una CONSTANTE
//color_fondo = "red";

// VARIABLES DE TIPO NÚMERO
// BIG INTEGER
console.log(9007199254740991 + 1)
console.log(9007199254740991 + 2)
let decimal = 5.6
console.log(decimal)
console.log(fechaNacimiento)
console.log(FechaNacimiento)
console.log(true)
console.log(false)
console.log(5/0);
console.log(23/'j')

console.log(typeof numero)
console.log(typeof decimal)
console.log(typeof fechaNacimiento)

let age = prompt ('¿Cuántos años tienes?', 100);
alert(`Tienes ${age} años!`); //Tienes 100 años!