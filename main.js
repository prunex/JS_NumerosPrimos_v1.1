"use strict"

var num = 2 // El numero inicial
var cont = 0 // Contador de numeros primos
var max = 1000 // Cantidad de numeros primos a calcular
var myString = "El calculo de los " 
    + max 
    + " primeros numeros primos a tardado: ";

//console.time(myString);
do {
    if (nrPrimo3(num)){
        cont++;
        console.log("[" + cont + "]: " + num);
    }
    num++;
} while(cont < max);
//console.timeEnd(myString);

function nrPrimo3 (nr){
    var resta = 0;
    var primo = true;
    for (let i = 2; i < nr; i++){
        if (nr % i == 0){
            primo = false;
            break;
        }
    }
   return primo;
}

function nrPrimo2(nr){
    var resta = 0;
    var primo = true;
    for (let i = 2; i < Math.trunc(nr/2); i++){
        if (nr % i == 0){
            primo = false;
            break
        }
    }
    return primo;
}

function nrPrimo1 (nr){    
    var resta = 0;
    for (let i = 2; i < nr; i++){
        if (nr % i == 0){
            resta++;
        }
    }
    return (resta == 0) ? true : false;
}