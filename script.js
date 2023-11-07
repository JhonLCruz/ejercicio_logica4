function esNumeroValido(valor) {
    return !isNaN(valor) && isFinite(valor);
  }
  
  function obtenerNumero() {
    let numero;
    do {
      numero = prompt("Por favor, ingrese un número entero para la serie de Fibonacci:");
      if (!esNumeroValido(numero)) {
        alert("El valor ingresado no es un número válido. Por favor, intente de nuevo.");
      }
    } while (!esNumeroValido(numero));
  
    return parseInt(numero);
  }
  
  function generarSerieFibonacci(n) {
    let serie = [];
    if (n >= 1) {
      serie.push(0);
    }
    if (n >= 2) {
      serie.push(1);
    }
    for (let i = 2; i < n; i++) {
      serie[i] = serie[i - 1] + serie[i - 2];
    }
    return serie;
  }
  
  function imprimirSerieEnDOM(serie) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = serie.join(", ");
  }
  
  function generarSerie() {
    const numeroInput = document.getElementById("numeroInput");
    const numero = parseInt(numeroInput.value);
    const serieFibonacci = generarSerieFibonacci(numero);
  
    if (isNaN(numero) || numero < 1) {
      alert("Por favor, ingrese un número válido mayor o igual a 1.");
    } else {
      imprimirSerieEnDOM(serieFibonacci);
    }
  }
  