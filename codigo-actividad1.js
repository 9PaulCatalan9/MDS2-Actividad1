/*
    En el siguiente ejemplo modifica lo que sea necesario para obtener el mensaje de la linea 16 en consola, '¡Lo lograste! Has obtenido el resultado correcto.'
*/
'use strict'
function actividadUno() {
    const numeros = [1,2,3,4,5,6,7,8,9,10]; // Array con los números del 1 al 10
    let resultado = '';

  // Utilizar una variable global para almacenar el resultado
  for (var i = 0; i < numeros.length; i++) {
    //Coloca aca tu solución para obtener el resultado deseado
  }

  // Comprobar el resultado utilizando comparación directa en lugar de una función de validación
  if (resultado === '12345678910') {//ESTE RESULTADO DEBERIAS DE OBTENER si lo hiciste bien
    console.log('¡Lo lograste! Has obtenido el resultado correcto.');
  } else if (resultado.indexOf('12345') === 0) {
    console.log('¡Vas por buen camino! Tu resultado es parcialmente correcto.');
  } else {
    console.log('Sigue intentando. Tu resultado no es correcto todavía.');
  }
}

// Llama a la función para ejecutar la actividad
actividadUno();
