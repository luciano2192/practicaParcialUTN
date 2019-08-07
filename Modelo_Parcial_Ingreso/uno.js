
function mostrar()
{
  var ladoA = document.getElementById('ladoA').value;
  var ladoB = document.getElementById('ladoB').value;
  var angulosRectos = document.getElementById('angulosRectos').value;

  alert('Lados concatenados: ' + ladoA + ladoB)

  ladoA = parseInt(ladoA);
  ladoB = parseInt(ladoB);

  if (angulosRectos == 'SI') {
    if (ladoA != ladoB) {
      var superficie = ladoA * ladoB;
      alert('La superficie es ' + superficie);
    } else {
      var multiplicacion = Math.pow(5,4);
      alert('La multiplicacion de los lados es ' + multiplicacion);
    }
  } else {
    if (ladoA != ladoB) {
      var perimetro = 2*(ladoA + ladoB);
      alert('El perimetro es ' + perimetro);
    } else {
      var suma = ladoA + ladoB + ladoA + ladoB;
      alert('La suma de sus lados es ' + suma);
    }
  }
}
