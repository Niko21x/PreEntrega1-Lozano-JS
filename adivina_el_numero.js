// Función para generar un número aleatorio entre 1 y 100
function generarNumeroAleatorio() {
    return (Math.floor(Math.random() * 100) + 1);
  }
  
  // Función para adivinar el número
  function adivinarNumero() {
    let numeroAleatorio = generarNumeroAleatorio();
    let intentos = 0;
    
    while (true) {
      let intento = parseInt(prompt("Adivina el número (entre 1 y 100):"));
      intentos++;
  
      if (isNaN(intento)) {
        alert("Ingresa un número válido.");
      } else if (intento < numeroAleatorio) {
        alert("El número es mayor. Intento #" + intentos);
      } else if (intento > numeroAleatorio) {
        alert("El número es menor. Intento #" + intentos);
      } else {
        alert("¡Felicidades! Adivinaste el número " + numeroAleatorio + " en " + intentos + " intentos.");
        break; // Salir del ciclo cuando se adivina el número
      }
    }
  }
  
  // Iniciar el juego
  adivinarNumero();
  