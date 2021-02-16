var confirmar = ""

do {
	
  //Valores de los recargos 
  var edad_18 = 0.1; // 10%
  var edad_25 = 0.2; // 20%
  var edad_50 = 0.3; // 30%
  
  var ingresos_recargo = 0.05; // 5%
  
  var casado_18 = 0.1; // 10%
  var casado_25 = 0.2; // 20%
  var casado_50 = 0.3; // 30%
  
  var hijos_recargo = 0.2; // 20%
  
  var propiedades_recargo = 0.35; // 35%
  
  
  //Recargos
  var cálculo_edad = 0
  var cálculo_ingresos = 0
  var cálculo_cónyugue = 0
  var cálculo_hijos = 0
  var cálculo_propiedades = 0
  var recargo_total = 0
  
  //Precio final 
  var precio_final = 0
  
  
  //Mensajes de alerta para ingresar datos 
  var precio_base = parseInt(prompt("Ingrese el precio del producto."))
  var nombre = prompt("Ingrese su nombre, por favor.")
  var edad = parseInt(prompt("¿Cuántos años tiene? Ingrese solamente números."))
  
  var ingresos = parseInt(prompt("¿Cuál es su ingreso mensual?")) 
  
  var casado = prompt("¿Está casado actualmente?")
  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge
  if("SI" == casado.toUpperCase() || "SÍ" == casado.toUpperCase()){
    edad_conyuge = parseInt(prompt("¿Que edad tiene su esposo/a?"))
  }
  
  var hijos = prompt("¿Tiene hijos o hijas?")
  //Comprobamos la cantidad de hijos solamente si los tienen
  var cantidad_hijos = 0
  
  if("SI" == hijos.toUpperCase() || "SÍ" == hijos.toUpperCase()){
    cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"))
  }
  
  var propiedades = prompt("¿Tiene propiedades a su nombre?")
  var cantidad_propiedades = 0
  
  if("SI" == propiedades.toUpperCase() || "SÍ" == propiedades.toUpperCase()){
    cantidad_propiedades = parseInt(prompt("¿Cuántas propiedades posee?"))
  }
  
  
  //Recargo por la edad del asegurado
  if(edad >= 18 && edad < 25){
    cálculo_edad = precio_base * edad_18
    recargo_total += cálculo_edad
  }
  
  if(edad >= 25 && edad < 50){
    cálculo_edad = precio_base * edad_25
    recargo_total += cálculo_edad
  } 
    
  if(edad >= 50){
    cálculo_edad = precio_base * edad_50
    recargo_total += cálculo_edad
  }
  
  //Recargo por ingresos
  cálculo_ingresos = ingresos * ingresos_recargo
  recargo_total += cálculo_ingresos
  
  
  //Recargo por la edad del cónyuge
  if(edad_conyuge >= 18 && edad_conyuge < 25){
    cálculo_cónyugue = precio_base * edad_18
    recargo_total += cálculo_cónyugue
  }
  
  if(edad_conyuge >= 25 && edad_conyuge < 50){
    cálculo_cónyugue = precio_base * edad_25
    recargo_total += cálculo_cónyugue
  }
  
  if(edad_conyuge >= 50){
    cálculo_cónyugue = precio_base * edad_50
    recargo_total += cálculo_cónyugue
  }
  
  
  //Recargo por la cantidad de hijos
  cálculo_hijos = precio_base * (cantidad_hijos * hijos_recargo)
  recargo_total += cálculo_hijos
  
  
  //Recargo por la cantidad de propiedades
  cálculo_propiedades = precio_base * (cantidad_propiedades * propiedades_recargo)
  recargo_total += cálculo_propiedades
  
    
    
  precio_final = precio_base + recargo_total
  
  
  //Resultado
  alert ("Para el asegurado "+nombre)
  
  alert ("El recargo por edad será de: " + cálculo_edad)
  
  alert("El recargo por ingresos será de: " + cálculo_ingresos)
  
  if(cálculo_cónyugue != 0){
    alert ("El recargo por cónyugue será de: " + cálculo_cónyugue)
  }
  
  if(cálculo_hijos != 0){
    alert ("El recargo por hijos será de: " + cálculo_hijos)
  }
  
  if(cálculo_propiedades != 0){
    alert ("El recargo por propiedades será de: " + cálculo_propiedades)
  }
  
  alert ("El recargo total será de: " + recargo_total)
  
  alert ("El precio total será de: " + precio_final)
  
  confirmar = prompt('Si ya no desea realizar cotizaciones, escriba "Salir"')
  
} while (confirmar.toUpperCase() != "SALIR")