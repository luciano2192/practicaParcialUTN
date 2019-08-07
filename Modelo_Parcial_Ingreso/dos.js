function mostrar()
{
  var cantidadPersonas = 0;
  var nombre;
  var genero;
  var edad;
  var peso;
  var flagPersonaMenosPesada = true;
  var masPesada = 0;
  var menosPesada = 0;
  var acumuladorEdad = 0;
  var contadorEdad = 0;
  var nombrePersonaMenosPesada;
  var contadorPersonasDistintas = 0;


  while(cantidadPersonas < 4) {

    nombre = prompt('ingrese su nombre: ');

    genero = prompt('ingrese genero: masculino / femenino / otro');

    while(genero !== 'masculino' && genero !== 'femenino' && genero !== 'otro') {
      genero = prompt('ERROR !. Ingrese nuevamente el genero: masculino / femenino / otro');
    }

    edad = parseInt(prompt('ingrese su edad: '));

    while( isNaN(edad) || edad < 18 || edad > 100 ) {
      edad = prompt('ERROR!. Ingrese nuevamente su edad: ');
    }

    if ( edad >= 25 ) {
      acumuladorEdad += edad;
      contadorEdad++;
    }

    peso = parseInt(prompt('ingrese su peso: '));

    while( isNaN(peso) || peso <= 1 ) {
      peso = prompt('ERROR!. Ingrese nuevamente su peso: ');
    }

    if( genero != 'masculino' || peso > 80) {
      contadorPersonasDistintas++;
    }

    if( flagPersonaMenosPesada || peso < menosPesada) {
      menosPesada = peso;
      nombrePersonaMenosPesada = nombre;
      flagPersonaMenosPesada = false;
    }

    cantidadPersonas++;
  }

  if(contadorEdad < 0) {
    alert('ERROR ! no se puede calcular el promedio.');
  } else {
    var promedioEdad = acumuladorEdad / contadorEdad;
    alert(promedioEdad);
  }

  alert(nombrePersonaMenosPesada + ' ' + menosPesada);
  alert(contadorPersonasDistintas);
}
