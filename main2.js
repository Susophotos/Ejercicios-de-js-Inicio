/* function saludar(nombre){
    console.log(`Buenas tardes ${nombre}`);
}
saludar(prompt("dime tu nombre")); */

//realizar una funcion en la que se sumen dos numeros

/* function suma(num1,num2){
    console.log(`la suma entre ${num1} y ${num2} es ${num1 + num2}.`);
}
suma (10,20); */

/* function suma(num1,num2){
    alert(`la suma entre ${num1} y ${num2} es ${num1 + num2}.`);
}
suma(Number(prompt("dime un numero")), prompt("dime un numero")); */

/* function suma(num1,num2){
    return num1 + num2
}
console.log(suma(Number(prompt("dime un numero")), prompt("dime un numero"))); */

// hacer una calculadora:
/* 
function calculadora(x , y, operador){
    switch (operador){
        case "+":
            return x + y;
            break;
        case "-":
            return x - y;
            break;    
            case "*":
                return x * y;
                break;    
                case "/":
                    return x / y;
                    break;    
                default:
                    return 0;
                    break;    
    }
}

console.log(calculadora(20, 5, "*"));
console.log(calculadora(20, 5, "/"));
console.log(calculadora(20, 5, "+"));
console.log(calculadora(20, 5, "-")); */


//function expression 

//es una forma de hacer funciones distinta, con pequeñas diferencias
// estructura: la funcion va dentro de una variable.

/* let saluda = function(){
    console.log("hola");
}
saluda(); */

//Arrow Function
//se utiliza para ahorrar codigo.
// function expresion
// let hi = ()=> console.log("hola");
// otra funcion
// let suma = (a, b) => a + b;
// console.log(suma(2, 2));


//Crear un programa que calcule el factorial de un número n, donde el valor de n se recibe desde el “prompt” y además se verifique si el valor es de tipo number. Si no lo es, se sale del programa con un mensaje de error.
 /* let n = 10;
 if (typeof n === "number" && !isNaN(n)){
    let ResultadoFactorial = 1;
    for(i = 1; i <= n; i++){
        ResultadoFactorial = ResultadoFactorial * i;      
    }     
    console.log(ResultadoFactorial);
 }else{
    console.log("fin de Programa");
    alert("fin de Programa");
 } */


/*  // 24 Escribir una función que, dados un mínimo y un máximos, cree un número aleatorio entre un número y un máximo.
 let ValorMinimo = Number(prompt("Introduzca un valor minimo"));
 let ValorMaximo = Number(prompt("Introduzca un valor maximo"));
 function NumeroRandom (NumeroMinimo, NumeroMaximo){
    let NumeroPosible = NumeroMaximo - NumeroMinimo;
    let PrimerRandom = NumeroPosible * Math.random();
    let SegundoRandom = PrimerRandom + NumeroMinimo;
    let RandomDefinitivo = Math.round(SegundoRandom);
    console.log(RandomDefinitivo);
    alert(`El numero aleatorio entre ${ValorMinimo} y ${ValorMaximo} es ${RandomDefinitivo}`)
 }
 NumeroRandom(ValorMinimo, ValorMaximo ); */

 /*  25 Crear una función, tipCalculator(), que tenga dos parámetros: una cadena que represente la calidad del servicio recibido y un número que represente el coste total. Devuelve la propina, como un número, basado en lo siguiente:
'fatal' debería devolver un 5% de propina.
'ok' debería devolver un 15% de propina.
'bueno' debería devolver un 20% de propina.
'excelente' debería devolver un 30% de propina.
Toda la demás propina deben ser predeterminadas al 18%.
 */

/* let TotalCuenta = Number(prompt("¿Cual es el monto total de su cuenta?"));
let tip = 0;
let CalidadServicio;
function TipCalculator (TotalCuenta, CalidadServicio){
    if(typeof TotalCuenta === "number" && !isNaN(TotalCuenta)){
        CalidadServicio = prompt("¿Que opcion representa mejor la calidad del servicio recibido: fatal, ok, bueno, excelente, normal?");
        CalidadServicio = CalidadServicio.toLowerCase ();
        switch (CalidadServicio) {
            case "fatal":
                tip = (TotalCuenta * 5 ) / 100;
                alert(`La propina segun la calidad del servicio deberia ser de ${tip}$`);
                break;
            case "ok":
                tip = (TotalCuenta * 15 ) / 100;
                alert(`La propina segun la calidad del servicio deberia ser de ${tip}$`);
                break;    
            case "bueno":
                tip = (TotalCuenta * 20 ) / 100;
                alert(`La propina segun la calidad del servicio deberia ser de ${tip}$`);
                break;
            case "excelente":
                tip = (TotalCuenta * 30 ) / 100;
                alert(`La propina segun la calidad del servicio deberia ser de ${tip}$`);
                break;    
            default:
                tip = (TotalCuenta * 18 ) / 100;
                alert(`La propina segun la calidad del servicio deberia ser de ${tip}$`);    
                break;
        }
    }else{
        alert("Ingrese un valor numerico por favor")
    }
}
TipCalculator(TotalCuenta, CalidadServicio);
 */

/* Escribir un programa que imprima en consola todos los números del 1 al 100.
Para los múltiplos de 3 imprime "java".
Para los múltiplos de 5 imprime "script".
Para los múltiplos de 3 y 5 imprime "javascript". */

/* for(i = 0; i <= 100; i++){
    if(i %3 == 0 && i %5 == 0){
        console.log(`${i}--java`);
    }else if(i %5 == 0){
        console.log(`${i}--Script`);
    }else if (i %3 == 0){
        console.log(`${i}--javaScript`);
    }else{
        console.log(`${i}`);
    }
} */
//Ejercicio resuelto con do while.
/* let i = 0;
do {
    i++;
    if(i %3 == 0 && i %5 == 0){
        console.log(`${i}--java`);
    }else if(i %5 == 0){
        console.log(`${i}--Script`);
    }else if (i %3 == 0){
        console.log(`${i}--javaScript`);
    }else{
        console.log(`${i}`);
    }
} while (i <= 100);
 */

// 27 Escribir una función que nos diga si un número es par o impar.
/* let NumeroParOImpar = Number(prompt("Introduzca un numero para saber si es par o impar."));
function NumerosParesOImpares (NumeroParOImpar){
    if(NumeroParOImpar %2 == 0){
        alert(`El numero ${NumeroParOImpar} es un numero par.`);
    }else{
        alert(`El numero ${NumeroParOImpar} es un numero impar.`);
    }
}
NumerosParesOImpares(NumeroParOImpar);
 */
/* // 28 Escribir una función que imprima un intervalo de números entre 0 y 10, excluyendo los pares.
let NumeroIntervaloA;
let NumeroIntervaloB;
function Intervalo(NumeroIntervaloA, NumeroIntervaloB){
    for(i = NumeroIntervaloA; i <= NumeroIntervaloB; i++){
        if(i %2 == 0){
            continue;
        }else{
            console.log(i);
        }
    }
}
Intervalo(0, 100); */

 /* 29 Te dan el length y el width de un polígono de 4 lados. El polígono puede ser un rectángulo o un cuadrado. Si es un cuadrado, devuelve su área. Si es un rectángulo, devuelve su perímetro.
 Para este ejercicio debes asumir que es un cuadrado, de lo contrario, es un rectángulo. */

/* let LadoA;
let LadoB;
function PoligonoOption(LadoA, LadoB){
    if(LadoA === LadoB){
        let AreaPoligono = LadoA * LadoB;
        console.log(`El poligono es un cuadrado, por lo tanto su area es ${AreaPoligono}`);
    }else{
        let PerimetroPoligono = LadoA + LadoB;
        console.log(`El poligono es un rectangulo por lo tanto su perimetro es ${PerimetroPoligono}`);
    }
}
PoligonoOption(4, 4); */

// 30 Escribir una función que calcule el área del radio del 1 al 10.

/* let Pi = Math.PI;
let RadioDeLCirculo;
let AreaDelCirculo;
function AreaCirculoCalculator(Pi, RadioDeLCirculo){
    for(i = 1; i <= 10; i++){
        RadioDeLCirculo = i;
        AreaDelCirculo = Pi * (RadioDeLCirculo**2);
        console.log(`El area de un circulo con radio ${RadioDeLCirculo} es igual a ${AreaDelCirculo}`);
    }
}
AreaCirculoCalculator(Pi, RadioDeLCirculo);
 */

 /* 31 Encuentra la forma más rápido de convertir la primera letra de una cadena en mayúscula a través de una función.
Ejemplo: capitalize('simon') Simon */
/* 
let CadenaPrimeraLetra;
function PrimeraLetraMayus(CadenaPrimeraLetra){
    CadenaPrimeraLetra = CadenaPrimeraLetra[0].toUpperCase() + CadenaPrimeraLetra.substring(1);
    console.log(`${CadenaPrimeraLetra}`);
}
PrimeraLetraMayus("jesus"); */