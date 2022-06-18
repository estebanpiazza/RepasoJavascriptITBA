console.log("Hola")
// extensión code runner

let nombre = "Esteban"
console.log(nombre)

// programacion funcional 
// funciones ? una porcion de codigo que se puede repetir
// los parametros son comodines
function sumar(a,b){ // el parametro es el dato externo a la función

    console.log(a+b)

}
sumar(1,3)

// tipos de datos
/* Number: entero (int - integer) y float (decimales)
* String : cadenas de caracteres (palabras o conjunto de simbolos ( NO operaciones matematicas))
* Booleano : true o false (Algebra de Boole)
* https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures
*/

// variables
// una variable es un espacio en memoria reservado bajo un nombre
let edad = 29;
edad = 29+1
//let nombreDeLaVariable = valor;
//let nombreDeLaVariable;
let variable;
// Deprecated (descontinuadas) por cuestiones de scope
// var edad = 29;
//las constantes no se pueden modificar una vez declaradas
const valorPI = 3.1415
//valorPI = valorPI + 1
// comentario simple linea
/*
* comentario multilinea
*/

function likear (post,cantidad){
    // cantidad de likes +1
}

function multiplicar (a,b){ //declarando -- Charla con el dt
    return a *b
}
console.log(multiplicar(1,2))
multiplicar(1,2)//invocando, jugando en la cancha
function doble(a){
    return a*2
}

console.log(doble(multiplicar(1,2)))

//ARRAYS/VECTORES
const NOMBRES = ["esteban","milagros","julian"]
const NUMEROS = [1,2,3,4]
const MIXTO = ["Esteban",29,true]
const VACIOS = [];
console.log(edad)
console.log(NOMBRES)
console.log(NOMBRES[0])
console.log(NUMEROS[0])
VACIOS.push("Veronica") //agrega datos
console.log(VACIOS)

//Objeto literal
let TechLider = {
    nombre : "Esteban",// par clave-valor
    edad : 29,
    personalInstitucion: true,
}
let developer = {
    nombre:"Milagros",
    edad: 25,
    personalInstitucion:false,
}
const ITBANK = [TechLider,developer]
console.log(ITBANK[1].nombre)
console.log(TechLider.nombre)

//array de objetos 
let arrayObjetos = [{},{},{},{}]
//JSON 

//https://studio.code.org/hoc/1 ejercicios tipo juegos
//http://pseint.sourceforge.net pseudocodigo



[
{"casa":
    {"compra":"121,96",
    "venta":"127,96",
    "agencia":"349",
    "nombre":"Dolar Oficial",
    "variacion":"0,27",
    "ventaCero":"TRUE",
    "decimales":"2"}},



{"casa":{"compra":"216,00","venta":"219,00","agencia":"310","nombre":"Dolar Blue","variacion":"-2,23","ventaCero":"TRUE","decimales":"2"}},{"casa":{"compra":"No Cotiza","venta":"0","agencia":"311","nombre":"Dolar Soja","variacion":"0","ventaCero":"TRUE","decimales":"3"}},{"casa":{"compra":"237,79","venta":"238,14","agencia":"312","nombre":"Dolar Contado con Liqui","variacion":"-0,41","ventaCero":"TRUE","decimales":"2"}},{"casa":{"compra":"229,450","venta":"229,080","agencia":"313","nombre":"Dolar Bolsa","variacion":"-1,500","ventaCero":"TRUE","decimales":"3"}},{"casa":{"compra":"9.852,070","venta":"0","agencia":"399","nombre":"Bitcoin","variacion":"-100,00","ventaCero":"TRUE","decimales":"3"}},{"casa":{"nombre":"Dolar turista","compra":"No Cotiza","venta":"211,13","agencia":"406","variacion":"0,27","ventaCero":"TRUE","decimales":"2"}},{"casa":{"compra":"120,37","venta":"128,25","agencia":"302","nombre":"Dolar","decimales":"3"}},{"casa":{"nombre":"Argentina","compra":"2.121,00","venta":"-0,24","mejor_compra":"True","mejor_venta":"False","fecha":"05\/05\/15","recorrido":"16:30","afluencia":{},"agencia":"141","observaciones":{}}}]


function conversor (valor,moneda,cotizacion){
    if(moneda === "dolar"){
        valor = valor * cotizacion
        return valor
    }else if (moneda === "euro"){
        valor = valor*cotizacion
        return valor
    }
    else{
        return "Ingrese un valor valido"
    }
}

console.log(1 == 1) //verdadero (true)
console.log("1" == 1 ) // compara solo el VALOR  true
console.log(1 === 1) // verdadero 
console.log( "1" === 1 ) // compara el valor Y el tipo de dato //falso