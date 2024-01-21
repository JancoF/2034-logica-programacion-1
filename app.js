
let numeroMaxPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaxPosible)+1;
let numeroUsario = 0;
let intentos = 1;
//let palabraCantidad = 'una vez';
maximoIntentos =3;
while(numeroUsario != numeroSecreto){
     numeroUsario = parseInt(prompt(`Me indicas un numero etre 1 y ${numeroMaxPosible} por favor`));

    console.log(typeof(numeroUsario));

    if (numeroUsario == numeroSecreto) {
        //operador ternario
        alert(`Acertaste, el numero es ${numeroUsario}, Lo hiciste en: ${intentos} ${intentos == 1 ?'vez':'veces'}`);
    } else {
        if(numeroUsario > numeroSecreto){
            alert('El numero correcto es menor');
        }else{
            alert('numero secreto es mayor ');
        }
        //intentos = intentos +1;
        intentos++;
       // palabraCantidad = 'veces';
        if(intentos >3){
            alert(`Llegaste a máximo ${maximoIntentos} intentos`);
            break
        }
    // alert('El numero es incorrecto');
    }
}



/* 
Muestra una alerta con el mensaje "¡Bienvenida y 
bievenido a nuestro sitio web!".

alert("Bievenido a nuetro sitio web");

Declara una variable llamada nombre y asígnale el valor "Luna".
let Luna= prompt("Minimbre es: ");
let edad = 25;
let numeroDEVentas = 50;
let saldoDiponible = 1000;
alert ('error completa todo los campos ');
let mensajeDeError = "Error completa los campos vacios" ;
alert(mensajeDeError);
let nombre =prompt("Cual es tu nombre cuasa?");
alert(nombre)
let edad = prompt("ingrese tu edad:");
alert(edad);
let mayorEdad = 18
let edad = prompt("ingresa tu edad: ")

if (edad >= mayorEdad){
    alert('puedes obtener licencia de conducir ')
}else{
    alert("eres menor de edad y esperate unos años mas ")
}

*/

/*

Pregunta al usuario qué día de la semana es. Si la respuesta
 es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
 De lo contrario, muestra "¡Buena semana!".
let diaSemana= prompt("que dia de la  semana es: ")
console.log(diaSemana)

if ( diaSemana == "sabado" || diaSemana == "domingo"){
    alert('Buen fin de semana')
}else {
    alert('buena semana')
}



let numero=  prompt("ingresa un numero ");

if (numero > 0){
alert('el numero es positivo')
    
}else if (numero <0) {
    alert('el numero es negativo')
}else{
    alert('numero es cero')
}


let puntuacion = prompt("ingresa el numero :");
if (puntuacion >=100){
alert('felicides')}
else{
    alert('Ingresa numero nuevamnete')
}

let mensaje = prompt("ingesa tu nombre");
alert(mensaje)






let = contador = 0;

while(contador <=10){
console.log(contador);
contador++;
}

let cotador = 0 ;
while(cotador >=10 );
cotador--;
let ingresaNumero = prompt('ingrese un numero:')
numero = 0
while(numero <=ingresaNumero  );
console.log(numero)
numero ++;


let nombre = prompt("ingrese su nombre: ")
alert('Bievenido joven ')
console.log(typeof(nombre));
let nombre= "miche";
console.log(nombre)
alert(`Hola binvenido ${nombre}`)

let legueje = prompt('Cula es el leguanje de programacion que te gusta?');
console.log(legueje)

let valo1 = 3;
let valor2  =2;

let resultado = valo1+valor2

console.log(resultado)


let age = prompt('Cual es tu edad :')
if(age >= 18 ){
    alert('usted es mayor de edad')

}else{
    alert('Ustde esmenos de edad')
}

let age = prompt('Cual es tu edad :');
resultado = age >=18 ? 'Usted es mayor de edad ':'Udted es menos de edad';
alert(`FiN ${resultado}`)


let numero = prompt("Escrieb un numero para saber si es positivo o negativo ");
resultado = numero >1 ? 'El numero engrasado es positivo ': ' el numero ingresado es negativo'
alert(resultado)

let numero = 1;
while(numero <= 10){
    
console.log(numero);
numero++;
}

let nota = prompt("ingresa tu nota ")

resultado = nota >= 7 ? 'Estas aprovado ': 'jalado'
alert(resultado)

//console.log(Math.random);
let numero = Math.random
console.log(numero)
let numero = Math.floor(Math.random()*1000)+1;
console.log(numero);
*/ 

