//idea: pedir primero número de fila, osea posición y luego hacer otro prompt para pedir número de columna
//despues aomodar para que sea mas comodo para el jugador al seleccionar las posiciones que le reste 1...

arreglo = [ [ [],[],[] ], [ [],[],[] ], [ [],[],[] ]  ];

arreglo[0][0].push("X");
arreglo[1][0].push("X");
arreglo[2][0].push("X");

console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]);

if ( arreglo[0][0] == "X" && arreglo[1][0] == "X" && arreglo[2][0] == "X") {
  console.log("Victoría");
}


    function recorrerFila(sumaX, contador = 0) {
      if (contador >= arreglo[0].length) {
        return sumaX;
      }
      arreglo[contador].map(
        (caja) => {
          if (caja == marca) {
            sumaX = sumaX + 1;
          }
          if (sumaX === 3) {
            alert("Ganó la " + marca);
            return contador = 3;
          }
        }
      )
      recorrerFila(sumaX, contador + 1);
    }
    recorrerFila(sumaX);