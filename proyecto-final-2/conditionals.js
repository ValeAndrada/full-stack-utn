const input = +prompt("Elija un número entre 1 y 2")
console.log(typeof input)

const numeros = [1, 2]

// Math.Random(): Esta función devuelve un número decimal pseudoaleatorio entre 0 (incluido) y 1 (excluido). Por ejemplo: 0.123, 0.876, 0.005.
// variable.length: Multiplica el número aleatorio por la longitud total del array (variable.length) transforma ese rango de [0, 1) al rango de [0, variable.length). Por ejemplo, si el array tiene 5 elementos (length es 5), el resultado estará entre 0 (cercano) y 4.999... (cercano a 5).
// Math.Floor(...): Esta función toma un número decimal y lo redondea hacia abajo al número entero más cercano. Por ejemplo, Math.Floor(4.999...) se convierte en 4 o Math.Floor(0.123) se convierte en 0.
// Esto asegura que el resultado final sea un número entero que corresponde a un índice válido del array (desde 0 hasta variable.length - 1).
const numerosAleatorios = numeros[Math.floor(Math.random() * numeros.length)]

if (input === numerosAleatorios) {
  console.log("Los números coinciden")
} else {
  console.log("Los números no coinciden")
}

const color = "Amarillo"

if (color === "Verde") {
  console.log("Puedes pasar")
} else if (color === "Rojo") {
  console.log("No puedes pasar")
} else if ("Amarillo") {
  console.log("Cuidado al pasar")
} else {
  console.log("No es un color válido. Coloque otro color")
}

const note = 9

if (note >= 5 && note <= 10) {
  console.log("Aprobado")
} else if (note <= 5 && note >= 0) {
  console.log("Desaprobado")
} else {
  console.log("No es un número válido. Elija otro")
}

// Operador ternario: es un sustituto para los condicionales if y else (si bien se puede colocar un else if, el ternario no está hecho para eso), pero solo en aquellos casos en los cuales se necesite evaluar una sola condición y elegir uno de dos resultados posibles (adicionalmente, a ese valor resultante se lo puede asignar a una variable), es decir, se utiliza solo en aquellos casos en donde no se necesite de una estructura de control compleja

const carnet = false
// ? === if; : === else
const haveCarnet = carnet === true ? console.log("Tiene carnet") : console.log("No tiene carnet")







