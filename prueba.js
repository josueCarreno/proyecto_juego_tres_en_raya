//idea: pedir primero número de fila, osea posición y luego hacer otro prompt para pedir número de columna
//despues acomodar para que sea mas comodo para el jugador al seleccionar las posiciones que le reste 1...
// cuando termine el juego pasar contador = 0

arreglo = [ [ "  ","  ","  " ], [ "  ","  ","  " ], [ "  ","  ","  " ]  ];

arreglo[0][2] = "X";
arreglo[1][1] = "X";
arreglo[2][0] = "X";

console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]);

/*if ( arreglo[0][0] == "X" && arreglo[1][0] == "X" && arreglo[2][0] == "X") {
  console.log("Victoría");
}*/


/*function recorrerFila(contador = 0, sumaX = 0) {
  if (contador >= arreglo[0].length) {
    return;
  }
  arreglo[contador].map(
    (caja) => {
      if (caja == "X") {
        sumaX = sumaX + 1;
      }
    }
  )
  if (sumaX === 3) {
    console.log("Ganó la X");
    return contador = 3;
  }
  recorrerFila(contador + 1);
}
recorrerFila();*/


/*function recorrerColumna(contador = 0, sumaX = 0, fila = 0, columna = 0) {
  if (contador >= 10) {
    return;
  }
  if (contador === 3 || contador === 7) {
    columna = columna + 1;
    fila = 0;
  }
  if (arreglo[columna][fila] === "X") {
    sumaX = sumaX + 1;
    console.log(sumaX);
  }
  if (sumaX === 3) {
    return console.log("Ganó la X");
  }
  recorrerColumna(contador + 1, sumaX, fila + 1, columna);
}
recorrerColumna();*/

/*function recorrerColumna(contador = 0) {
  if (contador >= 3) {
    return;
  }
  if (arreglo[0][contador] === "X" && arreglo[1][contador] === "X" && arreglo[2][contador] === "X") {
    console.log("Ganastes X");
  }
  recorrerColumna(contador + 1);
}
recorrerColumna();*/

function recorrerDiagonal(){
  if ((arreglo[0][0] === "X" && arreglo[1][1] === "X" && arreglo[2][2] === "X") || (arreglo[0][2] === "X" && arreglo[1][1] === "X" && arreglo[2][0] === "X")) {
    console.log("Ganastes X");
  }
}

recorrerDiagonal();