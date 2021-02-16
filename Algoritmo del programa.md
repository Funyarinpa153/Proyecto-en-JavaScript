# Algoritmo del cotizador automático

El siguiente algoritmo busca explicar el procedimiento realizado para la creación del **cotizador automático**.

1. Como primer paso, y por conveniencia, se deben declarar con anticipación las variables que serán de utilidad en el programa:
   - Las variables *edad_x* almacenan el porcentaje de **recargo** que se realiza acorde a la edad del cliente.
   - La variable *ingresos_recargo* almacena el **recargo** por el salario.
   - Las variables *casado_x* almacenan el **recargo** por la edad del cónyugue del cliente, en caso de tener uno.
   - La variable *hijos_recargo* almacena el **recargo** por hijos del cliente, en caso de que tenga.
   - La variable *propiedades_recargo* almacena el **recargo** por propiedades a nombre del cliente.
   - Finalmente, se declaran las variables que almacenarán los cálculos de los **recargos** que apliquen. Si no aplican, se quedarán con el valor por defecto de **0**.

2. Es momento de crear los mensajes de solicitud de datos:
   - Nombre
   - Edad
   - Ingresos mensuales
   - Preguntar al cliente si está casado. Si lo está, se debe solicitar la edad de su cónyugue.
   - Preguntar si el cliente tiene hijos. De tenerlos, averiguar la cantidad.
   - Preguntar si el cliente dispone de propiedades a su nombre. De tener, preguntar por la cantidad.
   
   Es de suma importancia el convertir las cantidades ingresadas a números; de esta manera, los cálculos podrán realizarse.
   
3. Con los porcentajes de **recargos** y los datos del cliente a la mano, es momento de realizar los cálculos:
   - Edad:
      si el cliente tiene entre **18** y **24** años, el **recargo** por edad será del **10%**.
      Si el cliente tiene entre **25** y **49** años, el **recargo** por edad será del **20%**.
      Si el cliente tiene **50** o más años, el **recargo** por edad será del **30%**.
      
   - Ingresos:
      el **recargo** será del **5%** del salario del cliente.
      
    **Recargos** cuya existencia variará de cliente en cliente:
    
   - Cónyugue:
      si el cónyugue tiene entre **18** y **24** años, el **recargo** por edad será del **10%**.
      Si el cónyugue tiene entre **25** y **49** años, el **recargo** por edad será del **20%**.
      Si el cónyugue tiene **50** o más años, el **recargo** por edad será del **30%**.
       
   - Hijos:
      el **recargo** será del **20%** por cada hijo.
       
   - Propiedades:
      el **recargo** será del **35%** por cada propiedad.
       
   Ahora se debe sumar el **recargo total** con el **precio base**.
    
4. Una vez realizados todos los cálculos, solo queda imprimir el nombre del cliente, todos los **recargos individuales**, el **total de recargos** y el **precio total**.
    
5. Hay muchos clientes que probablemente realizarán más de una **cotización**, razón por la que debe añadirse un ciclo **while** que repetirá todo el proceso de **cotización**      hasta que el cliente ingrese la palabra *Salir* en un último ingreso.
