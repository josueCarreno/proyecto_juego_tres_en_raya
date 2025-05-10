//idea: pedir primero número de fila, osea posición y luego hacer otro prompt para pedir número de columna

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