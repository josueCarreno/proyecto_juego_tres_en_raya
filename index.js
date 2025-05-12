//Proyecto 2: Juego de Tres en Raya (Tic-Tac-Toe)
//Crea un juego de tres en raya que permita a dos jugadores jugar por turnos.
function empezar(arreglo = [ [ "  ","  ","  " ], [ "  ","  ","  " ], [ "  ","  ","  " ]  ], contador = 0){
  if (contador === 0) {
    arreglo = [ [ "  ","  ","  " ], [ "  ","  ","  " ], [ "  ","  ","  " ]  ];
    alert("Bienvenido a el Juego de Tres en Raya");
  }
  if (contador === 9) {
    alert("¡Ganó la vieja!")
    empezar(arreglo, contador = 0);
  }
  let marca;
  let jugador;
  if (contador % 2 === 0) {
    marca = "X";
    jugador = "Jugador 1 (X)\n";
  } 
  else {
    marca = "O";
    jugador = "Jugador 2 (O)\n";
  }
  let imprimirFila = "Por favor ingrese la posición de la fila: \n\n";
  let imprimirColumna = "Ahora ingrese la posición de la columna: \n\n";
  let imprimirJuego = `${arreglo[0][0]} | ${arreglo[0][1]} | ${arreglo[0][2]} \n--------\n${arreglo[1][0]} | ${arreglo[1][1]} | ${arreglo[1][2]} \n--------\n${arreglo[2][0]} | ${arreglo[2][1]} | ${arreglo[2][2]} `;
  let fila = prompt(jugador +imprimirFila + imprimirJuego);
  if (fila != "1" && fila != "2" && fila != "3") {
    alert("Por favor ingrese una posición válida del 1 al 3");
    empezar(arreglo, contador);
  }
  let columna = prompt(jugador + imprimirColumna + imprimirJuego);
  if (columna != "1" && columna != "2" && columna != "3") {
    alert("Por favor ingrese una posición válida del 1 al 3");
    empezar(arreglo, contador);
  }
  fila =+ parseInt(fila);
  columna =+ parseInt(columna);
  if (arreglo[fila-1][columna-1] === "  ") {
    arreglo[fila-1][columna-1] = marca;
  } 
  else {
    alert("¡Ya la casilla está ocupada!");
    empezar(arreglo, contador);
  }
  /*if (contador >= 4) {
      arreglo[1].map(
        (caja) => {
          if (caja == marca) {
            sumaX = sumaX + 1;
          }
        }
      )
    }
  if (sumaX === 3) {
    alert("Ganó la " + marca);
  }*/
  function recorrerFila(contador = 0, sumaX = 0) {
    if (contador >= arreglo[0].length) {
      return;
    }
    arreglo[contador].map(
      (caja) => {
        if (caja == marca) {
          sumaX = sumaX + 1;
        }
      }
    )
    if (sumaX === 3) {
      alert("Ganó el " + jugador);
      empezar(arreglo, contador = 0);
    }
    recorrerFila(contador + 1);
  }
  recorrerFila();
  function recorrerColumna(contador = 0) {
    if (contador >= 3) {
      return;
    }
    if (arreglo[0][contador] === marca && arreglo[1][contador] === marca && arreglo[2][contador] === marca) {
      alert("Ganó el " + jugador);
      empezar(arreglo, contador = 0);
    }
    recorrerColumna(contador + 1);
  }
  recorrerColumna();
  function recorrerDiagonal(){
    if ((arreglo[0][0] === marca && arreglo[1][1] === marca && arreglo[2][2] === marca) || (arreglo[0][2] === marca && arreglo[1][1] === marca && arreglo[2][0] === marca)) {
      alert("Ganó el " + jugador);
      empezar(arreglo, contador = 0);
    }
  }
  recorrerDiagonal();
  empezar(arreglo, contador + 1);
}

empezar();

