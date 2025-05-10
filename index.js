//Proyecto 2: Juego de Tres en Raya (Tic-Tac-Toe)
//Crea un juego de tres en raya que permita a dos jugadores jugar por turnos.
function empezar(){
  //alert("Bienvenido a el Juego de Tres en Raya")
  let arreglo = [ [ ["  "],["  "],["  "] ], [ ["  "],["  "],["  "] ], [ ["  "],["  "],["  "] ]  ];
  console.log(arreglo[0][0]);
  alert(`${arreglo[0][0]} | ${arreglo[0][1]} | ${arreglo[0][2]} \n--------\n${arreglo[1][0]} | ${arreglo[1][1]} | ${arreglo[1][2]} \n--------\n${arreglo[2][0]} | ${arreglo[2][1]} | ${arreglo[2][2]} `);
}

empezar();

