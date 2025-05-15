//Proyecto 2: Juego de Tres en Raya (Tic-Tac-Toe)
//Crea un juego de tres en raya que permita a dos jugadores jugar por turnos.

//Mensaje de Bienvenida
alert("Bienvenido a el Juego de Tres en Raya");

//Variables Iniciales
let marca;
let jugador;
let imprimirFila = "Por favor ingrese la posición de la fila: \n\n";
let imprimirColumna = "Ahora ingrese la posición de la columna: \n\n";
let contador = 0;
let fila;
let columna;

function empezar(){
  limpiarJuego();
  evaluarEmpate();
  evaluarJugador();
  imprimirPartida();
  pedirJugada();
  asignarValor();
  if (contador >= 4) {
    recorrerFila();
    recorrerColumna();
    recorrerDiagonal();
  }
  contador = contador + 1;
  empezar();
}

/**
 * @function empezar
 * @description Función principal que inicia el programa
 * @returns {void}
 */
empezar(contador);

/**
 * @function limpiarJuego
 * @description Función que establece el tablero en su estado inicial
 * @returns {[]} Arreglo representado del tablero
 */
function limpiarJuego(){
  if (contador === 0) {
    return arreglo = [ [ "  ","  ","  " ], [ "  ","  ","  " ], [ "  ","  ","  " ]  ];
  }
}

/**
 * @function evaluarEmpate
 * @description Si los dos jugadores se han quedado sin movimientos, se muestra un mensaje de empate
 * @returns {void}
 */
function evaluarEmpate(){
  if (contador === 9) {
    contador = 0;
    alert("¡Empate!");
    empezar();
  }
}

/**
 * @function evaluarJugador
 * @description Función que establece el turno del jugador según el número de jugadas representadas por el contador
 * @returns {"Jugador 1 (X)\n" | "Jugador 2 (O)\n", "X" | "O"} strings del número del jugador y su marca
 */
function evaluarJugador(){
  if (contador % 2 === 0) {
    jugador = "Jugador 1 (X)\n";
    marca = "X";
  } 
  else {
    jugador = "Jugador 2 (O)\n";
    marca = "O";
  }
  return jugador, marca;
}

/**
 * @function imprimirPartida
 * @description Función que imprime el tablero del juego, con los valores de las casillas
 * @returns {""} String de la impresión del tablero del juego
 */
function imprimirPartida() {
  return imprimirJuego = `${arreglo[0][0]} | ${arreglo[0][1]} | ${arreglo[0][2]} \n--------\n${arreglo[1][0]} | ${arreglo[1][1]} | ${arreglo[1][2]} \n--------\n${arreglo[2][0]} | ${arreglo[2][1]} | ${arreglo[2][2]} `;
}

/**
 * @function pedirJugada
 * @description Función que solicita al jugador ingresar la fila y la columna de la casilla en la que desea poner su marca
 * @returns {number} Posición de la fila y la columna
 */
function pedirJugada() {
  fila = prompt(jugador + imprimirFila + imprimirJuego);
  evaluarEntradaDato(fila);
  columna = prompt(jugador + imprimirColumna + imprimirJuego);
  evaluarEntradaDato(columna);
  return fila, columna;
}

/**
 * @function evaluarEntradaDato
 * @description Función que imprime el tablero del juego, con los valores de las casillas
 * @returns {void}
 * @params {string} valor - Posición de la fila y la columna
 */
function evaluarEntradaDato(valor){
  if (valor != "1" && valor != "2" && valor != "3") {
    alert("Por favor ingrese una posición válida del 1 al 3");
    empezar();
  }
}

/**
 * @function asignarValor
 * @description Función que asigna el valor de la marca al tablero del juego
 * @returns {void}
 */
function asignarValor() {
  if (evaluarCasilla()) {
    arreglo[fila-1][columna-1] = marca;
  } 
  
}

/**
 * @function evaluarCasilla
 * @description Función que evalua si la casilla seleccionada por el jugador esta vacia, sino se muestra un mensaje en pantalla
 * @returns {void}
 */
function evaluarCasilla() {
  if (arreglo[fila-1][columna-1] === "  ") {
    return true;
  }
  else {
    alert("¡Ya la casilla está ocupada!");
    empezar();
  }
}


/**
 * @function recorrerFila
 * @description Función que recorre la fila para saber si el jugador ha ganado
 * @returns {void}
 * @params {number} contadorLocal - Contador local para recorrer el arreglo
 * @params {number} sumaX - Contador que busca tres veces la marca para saber que jugador ha ganado
 */
function recorrerFila(contadorLocal = 0, sumaX = 0) {
    if (contadorLocal >= arreglo[0].length) {
      return true;
    }
    arreglo[contadorLocal].map(
      (caja) => {
        if (caja == marca) {
          sumaX = sumaX + 1;
        }
      }
    )
    if (sumaX === 3) {
      alert("Ganó el " + jugador);
      contador = 0;
      empezar();
    }
    recorrerFila(contadorLocal + 1);
  }

  
/**
 * @function recorrerColumna
 * @description Función que recorre la columna para saber si el jugador ha ganado
 * @returns {void}
 * @params {number} contadorLocal - Contador local para recorrer el arreglo
 */
function recorrerColumna(contadorLocal = 0) {
  if (contadorLocal >= 3) {
    return true;
  }
  if (arreglo[0][contadorLocal] === marca && arreglo[1][contadorLocal] === marca && arreglo[2][contadorLocal] === marca) {
    alert("Ganó el " + jugador);
    contador = 0;
    empezar();
  }
  recorrerColumna(contadorLocal + 1);
}

/**
 * @function recorrerDiagonal
 * @description Función que recorre el diagonal para saber si el jugador ha ganado
 * @returns {void}
 */
function recorrerDiagonal(){
  if ((arreglo[0][0] === marca && arreglo[1][1] === marca && arreglo[2][2] === marca) || (arreglo[0][2] === marca && arreglo[1][1] === marca && arreglo[2][0] === marca)) {
    alert("Ganó el " + jugador);
    contador = 0;
    empezar();
  }
  else {
    return true;
  }
}
