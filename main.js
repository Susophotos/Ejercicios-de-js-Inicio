console.log("Ejercicios de iniciacion en JavaScript");
// 1 iniciar el JavaScript de las dos formas correspondientes
console.log("ejercicio 1");
console.log("iniciado");
// 2 imprimir "Empezamos con JavaScript"
console.log("Ejercicio 2");
console.log("Empezamos con JavaScript");

// 3 imprimir "Hola, soy un estudiante de Hackademy"
console.log("Ejercicio 3");
console.log("Hola, soy un estudiante de Hackademy");

// 4  declarar una variable y reasignarla
console.log("Ejercicio 4");
let saludo = "buenos dias";
console.log(saludo);
saludo= "que tal";
console.log(saludo);

// 5 declara dos variables que al imprimirlas formen una frase
console.log("Ejercicio 5");
let llamado = "hey, perdona,";
let pregunta= " ¿cual es su nombre?";
console.log(llamado + pregunta);


//parte 2____________-

// 6 inicializar variables de todos los tipos primitivos
// e imprimir el tipo de dato
console.log("Ejercicio 6");
let variableString = "soy un string";
let variableNumero = 15;
let variableBoolean = true;
let variableUndefined; 
console.log(typeof(variableString), typeof(variableNumero), typeof(variableBoolean), typeof(variableUndefined));



// 7 inicializar una variable num igual a 5 e imprimir 
// en la consola "num" obteniendo 10 como resultado
console.log("Ejercicio 7");
let num = 5;
console.log(num * 2);

// 8 declarar dos variables e inicializarlas tipo string e imprimir
// solo una nueva variable, con el contenido de las dos variables
console.log("Ejercicio 8");
let primeraVariable = "hola que tal ";
let segundaVariable = "Jesus";
primeraVariable = primeraVariable + segundaVariable;
console.log(primeraVariable);

let variableNum = 5;
console.log(variableNum);
variableNum = String(variableNum);
console.log(variableNum);

// 9 Inicializar una variable num de valor 5 y transforma num en cadena. Imprime en console.log los dos tipos de datos.
console.log("Ejercicio 9");
let numeroAcadena = 35;
console.log(numeroAcadena);
console.log(typeof(numeroAcadena));
numeroAcadena = String(numeroAcadena);
console.log(typeof(numeroAcadena));

// 10 Inicializar una variable tipo num con 6 decimales e imprimir
//  la variable cambiando el tipo y que aparezcan sólo 3 decimales.
console.log("Ejercicio 10");
let numeroDecimal = 7e-6;
console.log(numeroDecimal);
numeroDecimal = 7e-3;
console.log(numeroDecimal);
numeroDecimal = String(numeroDecimal)
console.log(numeroDecimal);
console.log(typeof(numeroDecimal));


// 11 Imprimir la suma de los caracteres entre dos cadenas
console.log("Ejercicio 11");
let numeroCadena1 = "20";
let numeroCadena2 = "30";
console.log(Number(numeroCadena1)+Number(numeroCadena2));

// 12 Encapsular el resultado de la operación anterior en una variable, e imprimir con la string interpolation.
console.log("Ejercicio 12");
// let ResultadoEncapsulado = Number(numeroCadena1)+Number(numeroCadena2);
let ResultadoEncapsulado = `Interpolation ${Number(numeroCadena1) + Number(numeroCadena2)}`;
console.log(ResultadoEncapsulado);
console.log(typeof(ResultadoEncapsulado));

// 13 Escribir el resultado y el tipo de dato de la siguiente coerción: 10 + “1” y 10 - “1”
console.log("ejercicio13");
let NumeroCoercion1 = 10;
let StringCoercion1 = "1";
console.log(NumeroCoercion1+StringCoercion1+" "+typeof(NumeroCoercion1+StringCoercion1));//<=Da como resultado 101 String.
console.log(NumeroCoercion1-StringCoercion1+" "+typeof(NumeroCoercion1-StringCoercion1));//<= Da como resultado 9 Number.
let SumaCoercion = NumeroCoercion1 + StringCoercion1; //Da como resultado 101 String.
console.log(SumaCoercion);
console.log(typeof(SumaCoercion));

let RestaCoercion = NumeroCoercion1 - StringCoercion1;//Da como resultado 9 Number.
console.log(RestaCoercion);
console.log(typeof(RestaCoercion));

// 14 Sustituir la palabra "contigo" por la palabra "yo" sin crear una nueva cadena e imprimir la nueva cadena en consola:
//let string = "Hey Tú, cómo te llamas. ¡Hey, estoy hablando contigo!
//let string = “Hey Tú, cómo te llamas. ¡Hey, estoy hablando yo!"

console.log("Ejercicio 14");
let string = "Hey Tú, cómo te llamas. ¡Hey, estoy hablando contigo!";
console.log(string);
string = "Hey Tú, cómo te llamas. ¡Hey, estoy hablando yo!";
console.log(string);

// 15 Crear un programa que dada una variable number nos diga si es mayor que 100.
console.log("Ejercicio 15");
let VariableMayorQue100 = prompt("15-Introduzca un numero");
if (VariableMayorQue100 > 100) {
    alert("El numero ingresado es mayor que 100")
    console.log("El numero ingrresado es mayor que 100");
} else {
    alert("el numero ingresado es menor que 100")
    console.log("el numero ingresado es menor que 100");
}

// 16 Crear un programa que dada una variable number nos diga si es positivo o negativo.
console.log("Ejercicio 16");
let VariablePositiva = prompt("16-Introduzca un numero");
if (VariablePositiva > 0) {
    alert("El numero ingresado tiene un valor positivo")
    console.log("El numero ingresado tiene un valor positivo");
} else {
    alert("el numero ingresado tiene un valor negativo")
    console.log("el numero ingresado tiene un valor negativo");
}

// 17 Crear un programa que dadas 2 variables tipo number, las sume. Si la suma es mayor que 50 multiplique por 2, si no, por 3.
console.log("Ejercicio 17");
let VariableTypeNumber1 = prompt("17-Ingrese un numero");
VariableTypeNumber1 = Number(VariableTypeNumber1)
let VariableTypeNumber2 = prompt("17.1-Ingrese un segundo numero");
VariableTypeNumber2 = Number(VariableTypeNumber2)
let VariableTypeNumberSuma = VariableTypeNumber1 + VariableTypeNumber2;
if (VariableTypeNumberSuma > 50){
    alert("La suma de ambos numeros es mayor a 50");
    console.log("La suma de ambos numeros es mayor a 50");
    VariableTypeNumberSuma = VariableTypeNumberSuma * 2;
    alert("Su numero se multiplicara por 2, y el resultado es"+" "+VariableTypeNumberSuma);
    console.log(VariableTypeNumberSuma);
} else {
    alert("La suma de ambos numeros es menor a 50");
    console.log("La suma de ambos numeros es menor a 50");
    VariableTypeNumberSuma = VariableTypeNumberSuma * 3;
    alert("Su numero se multiplicara por 3, y el resultado es"+" "+VariableTypeNumberSuma);
}

// 18 Crear un programa que dada una variable number, nos diga si es un múltiplo de 3. Si no lo es, nos diga si es múltiplo de 8 y, si no, imprima un mensaje de error

console.log("Ejercicio 18");
let VariableMultiplo = prompt("18-Ingrese un numero para saber si es multiplo de 3, o multiplo de 8.");
if (VariableMultiplo %3 == 0){
    console.log("El numero ingresado es multplo de 3.");
    alert("El numero ingresado es multplo de 3.")
}else if(VariableMultiplo %8 == 0){
    console.log("El numero ingresado es multplo de 8.");
    alert("El numero ingresado es multplo de 8.")
}else {
    console.log("El numero ingresado no es multiplo ni de 3, ni de 8.");
    alert("El numero ingresado no es multiplo ni de 3, ni de 8.")
}

// 19 Crear un programa que dadas 2 variables booleanas, “buen_tiempo” y “trabajo”, nos diga si puedo ir a la playa. Si trabajo, no puedo ir, si no trabajo verifico que haga buen tiempo. En los casos negativos imprimir un mensaje adecuado.
console.log("Ejercicio 19");
let BuenTiempo = true;
let Trabajo = false;
if (BuenTiempo == true && Trabajo == false){
    console.log("Puede ir a la playa.");
}else{
    console.log("No puede ir a la playa.");
} 
 




/* console.log("Ejercicion 19");
let BuenTiempo = prompt("Hace buen tiempo?");
let Trabajo = prompt("Tienes trabajo hoy?");
if (Trabajo == si || Trabajo == SI || Trabajo == sI || Trabajo == Si){
    Trabajo = true;
}else{
    Trabajo = false;
}
if (BuenTiempo == si || BuenTiempo == SI || BuenTiempo == sI || BuenTiempo == Si){
    BuenTiempo = true;
    alert("si no trabajas y encima hace buen")
}else{
    BuenTiempo = false;
}
if(BuenTiempo === true && Trabajo === false){
    console.log("Puedes ir a la playa.");
}else{
    console.log("No puedes ir a la playa.");
} */

// 20 Crear un programa que reste 5 a los primeros 20 números (1,2,3,4...20).
for(i = 0; i <= 20; i++){
    let NumeroCiclo = i;
    console.log(`El numero ${NumeroCiclo} - 5 = ${NumeroCiclo - 5}.`);
}


// 21 Crear un programa que sume los prieros 20 numeros

let Resultado = 0;
for(i = 0; i <= 20; i++){      
    Resultado = Resultado + i;   
}
console.log(Resultado);

// 22 Crear un programa que calcule la suma de los primeros “n” números, donde el valor de n, se recibe desde el “prompt”
console.log("Ejercicio");
let ResultadoCiclo = 0;
let Ciclo = Number(prompt("22-Ingrese un numero hasta el cual desee sumar progresivamente"));
for(i = 0; i <= Ciclo; i++){      
    ResultadoCiclo = ResultadoCiclo + i;   
}
alert(`El resultado es ${ResultadoCiclo}`);

// 23 Crear un programa que calcule el factorial de un número n, donde el valor de n se recibe desde el “prompt” y además se verifique si el valor es de tipo number. Si no lo es, se sale del programa con un mensaje de error.

console.log("Ejercicio 23");
let n = Number(prompt("23- Ingrese un numero para calcular su factorial."));
 if (typeof n === "number" && !isNaN(n)){
    let ResultadoFactorial = 1;
    for(i = 1; i <= n; i++){
        ResultadoFactorial = ResultadoFactorial * i;      
    }     
    console.log(ResultadoFactorial);
    alert(`El numero factorial de ${n} es ${ResultadoFactorial}`);
 }else{
    console.log("fin de Programa");
    alert("fin de Programa");
 }

 
  // 24 Escribir una función que, dados un mínimo y un máximos, cree un número aleatorio entre un número y un máximo.
  console.log("Ejercicio 24");
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
  NumeroRandom(ValorMinimo, ValorMaximo );

  /*  25 Crear una función, tipCalculator(), que tenga dos parámetros: una cadena que represente la calidad del servicio recibido y un número que represente el coste total. Devuelve la propina, como un número, basado en lo siguiente:
'fatal' debería devolver un 5% de propina.
'ok' debería devolver un 15% de propina.
'bueno' debería devolver un 20% de propina.
'excelente' debería devolver un 30% de propina.
Toda la demás propina deben ser predeterminadas al 18%.
 */

let TotalCuenta = Number(prompt("¿Cual es el monto total de su cuenta?"));
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

/* 26 Escribir un programa que imprima en consola todos los números del 1 al 100.
Para los múltiplos de 3 imprime "java".
Para los múltiplos de 5 imprime "script".
Para los múltiplos de 3 y 5 imprime "javascript". */
console.log("Ejercicio 26");
for(i = 0; i <= 100; i++){
    if(i %3 == 0 && i %5 == 0){
        console.log(`${i}--java`);
    }else if(i %5 == 0){
        console.log(`${i}--Script`);
    }else if (i %3 == 0){
        console.log(`${i}--javaScript`);
    }else{
        console.log(`${i}`);
    }
}
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
let NumeroParOImpar = Number(prompt("Introduzca un numero para saber si es par o impar."));
function NumerosParesOImpares (NumeroParOImpar){
    if(NumeroParOImpar %2 == 0){
        alert(`El numero ${NumeroParOImpar} es un numero par.`);
    }else{
        alert(`El numero ${NumeroParOImpar} es un numero impar.`);
    }
}
NumerosParesOImpares(NumeroParOImpar);

// 28 Escribir una función que imprima un intervalo de números entre 0 y 10, excluyendo los pares.
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
Intervalo(0, 100);

/* 29 Te dan el length y el width de un polígono de 4 lados. El polígono puede ser un rectángulo o un cuadrado. Si es un cuadrado, devuelve su área. Si es un rectángulo, devuelve su perímetro.
 Para este ejercicio debes asumir que es un cuadrado, de lo contrario, es un rectángulo. */

 let LadoA;
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
 PoligonoOption(4, 4);


 // 30 Escribir una función que calcule el área del radio del 1 al 10.

let Pi = Math.PI;
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

 /* 31 Encuentra la forma más rápido de convertir la primera letra de una cadena en mayúscula a través de una función.
Ejemplo: capitalize('simon') Simon */

let CadenaPrimeraLetra;
function PrimeraLetraMayus(CadenaPrimeraLetra){
    CadenaPrimeraLetra = CadenaPrimeraLetra[0].toUpperCase() + CadenaPrimeraLetra.substring(1);
    console.log(`${CadenaPrimeraLetra}`);
}
PrimeraLetraMayus("jesus");