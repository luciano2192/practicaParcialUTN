function mostrar()
{

  var respuesta = 'SI';
  var nombrePais;
  var nombrePaisConMasHabitantes;
  var nombrePaisConMayorTemperatura;
  var cantidadHabitantes = 0;
  var acumuladorHabitantes = 0;
  var cantidadPaises = 0;
  var mayorCantidadHabitantes;
  var temperaturaMinima;
  var temperaturaMaxima;
  var cantidadTemperaturasImpares = 0;
  var cantidadPaisesTemperaturasMenoresA20 = 0;
  var promedioHabitantes = 0;
  var flagMayorCantidadHabitantes = true;
  var flagMayorTemperatura = true;

  while(respuesta == 'SI') {

    nombrePais = prompt('ingrese un pais: ');
    cantidadHabitantes = parseInt(prompt('ingrese cantidad de habitantes: '));

    while( isNaN(cantidadHabitantes) || cantidadHabitantes < 1 || cantidadHabitantes > 270) {

      cantidadHabitantes = parseInt(prompt('ERROR ! Ingrese nuevamente la cantidad de habitantes: ')); //Parsear
    }

    temperaturaMinima = parseInt(prompt('ingrese la temperatura minima que se registra: '));

    while( isNaN(temperaturaMinima) || temperaturaMinima < -50 || temperaturaMinima > 50 ) {
      temperaturaMinima = parseInt(prompt('ERROR ! Ingrese nuevamente la temperatura: ')); //Parsear
    }

    if( temperaturaMinima % 2 != 0) { //
      cantidadTemperaturasImpares++;
    }

    if( temperaturaMinima < 20 ) {
      cantidadPaisesTemperaturasMenoresA20++;
    }

    if( flagMayorTemperatura || temperaturaMinima > temperaturaMaxima ) {
      temperaturaMaxima = temperaturaMinima;
      nombrePaisConMayorTemperatura = nombrePais;
      flagMayorTemperatura = false;
    }

    if( flagMayorCantidadHabitantes || cantidadHabitantes > mayorCantidadHabitantes ) {
      mayorCantidadHabitantes = cantidadHabitantes;
      nombrePaisConMasHabitantes = nombrePais;
      flagMayorCantidadHabitantes = false;
    }

    acumuladorHabitantes += cantidadHabitantes;
    cantidadPaises++;
    respuesta = prompt('Desea ingresar otro dato ? SI / NO').toUpperCase();
  }


    alert('Paises con temperaturas menores a 20: ' + cantidadPaisesTemperaturasMenoresA20);

  if (cantidadPaises <= 0) {
    alert('ERROR ! no tiene paises ingresados');
  } else {
    promedioHabitantes = acumuladorHabitantes / cantidadPaises;
    alert('Promedio de habitantes: ' + promedioHabitantes);
  }

    alert('Cantidad temperaturas impares: ' + cantidadTemperaturasImpares);

  alert(nombrePaisConMasHabitantes + ' habitantes: ' + mayorCantidadHabitantes);

  alert('Mayor temperatura en : ' + nombrePaisConMayorTemperatura + ' , Temperatura: ' + temperaturaMaxima);
}
