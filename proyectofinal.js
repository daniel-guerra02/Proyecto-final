

do{
var finalizacion
var precio_base = 2000

var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var tarifa_propiedades = 0.35
var tarifa_salarios = 0.05

var hijos_recargo = 0.2 // 20%

var recargo = 0
var recargo_total = 0

var precio_final = 0


var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

var casado = prompt("¿Está casado actualmente?", "si/no")

var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?", "si/no")
var cantidad_hijos = 0
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = parseInt(prompt("¿Cuantos hijos tiene?"))
}

var propiedades = prompt("¿Tienes propiedades?", "si/no")
var cantidad_propiedades = 0
if("SI" == propiedades.toUpperCase()){
  cantidad_propiedades = parseInt(prompt("¿Cuantas propiedades tiene?"))
}

var salario = prompt("¿Usted cuenta con un salario?", "si/no")
var precio_salario = 0
if("SI" == salario.toUpperCase()){
  precio_salario = parseInt(prompt("¿De cuanto es su salario?"))
}



if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
} else if(edad_numero>=25 && edad_numero<50){
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
} else if(edad_numero>=50){
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo}

if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * casado_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
} else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
  recargo = precio_base * casado_25
  recargo_total = recargo_total + recargo
} else if(edad_conyuge_numero>=50){
  recargo = precio_base * casado_50
  recargo_total = recargo_total + recargo}
/**
 * 3. Recargo por la cantidad de hijos 
 */ if("SI" == hijos.toUpperCase()){ 
recargo = precio_base * hijos_recargo * cantidad_hijos 
recargo_total = recargo_total + recargo
 }

  if("SI" == propiedades.toUpperCase()){
    recargo = precio_base * tarifa_propiedades * cantidad_propiedades
    recargo_total = recargo_total + recargo
  }

  if("SI" == salario.toUpperCase()){
    recargo = tarifa_salarios * precio_salario
    recargo_total = recargo_total + recargo
  }


precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)
finalizacion = prompt("Escriba 'salir' si desea finalizar el programa, de lo contrario, escriba lo que sea")
}while(finalizacion.toUpperCase() !== "SALIR")