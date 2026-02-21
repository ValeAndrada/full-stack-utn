// Datos primitivos: unidades singulares de información que son inmutables
// Se habla de que los datos primitivos son "inmutables" dado que no se puede modificar el contenido interno del valor que se le asigna a una variable. En este sentido, si se reasigna completamente una variable, es decir, por ejemplo, si se cambia el contenido de "Hola" a "Chau", no aplica la inmutabilidad dado que el objetivo de esta es demostrar que el valor original asignado a una variable no puede ser modificado

let name = "Juan";

name[0] = "R";
// La consola imprimriá solo "Juan" demostrando que, a pesar de intentar modificar el carácter en el índice 0, el valor primitivo original permaneció inmutable. En definitiva, la única forma de modificar un dato primitivo es reasignando completamente el valor
console.log(name);

let age = 31;
age = 50;
console.log(typeof age);

// Datos complejos o compuestos: a diferencia de los primitivos, representan un conjunto de datos (es decir, forman una estructura de datos) y, también, son mutables

// Array: sirve para listar elementos, es decir, que a cada dato se le asigna una posición
const listOfProducts = ["Tomates", "Carne", "Crema", 5, "Pan"]
console.log(listOfProducts.length)

listOfProducts.push("Harina", "Lechuga")
console.log(listOfProducts)

// En el siguiente ejemplo, la consola arrojará error dado que se está intentando reasigar (reemplazar una cosa por otra) el valor de una variable constante y no modificar el contenido del array. Si se declarara como let, entonces la consola no arrojaría error
// const listOfProducts = ["Tomates", "Carne", "Crema", 5, "Pan"]
// listOfProducts = 1
// console.log(listOfProducts)

listOfProducts.push("Harina", "Lechuga")
console.log(listOfProducts)

// Objet: sirve para describir elementos; un elemento tiene propiedades y métodos (funciones, es decir, acciones). Se las describe en el formato "clave: valor"
const properties = {
  color: "Red",
  form: "round",
  price: "cheap",
  available: true,
  fruitAvailable: function () {
    // this.available: this apunta a properties. Por lo tanto, this.available es lo mismo que properties.available. Accede al valor de la propiedad available dentro del objeto properties, que es true
    console.log(this.available)
  }
}

properties.fruitAvailable()

// Bucles
// Callback: es una función que se ejecuta luego de que pasa algo (por ejemplo, el setTimeout o el addEventListener). El mismo, se ejecuta en cada iteracción

listOfProducts.forEach(function () {
  console.log("Cantidad de elementos")
})

const fruits = [
  { name: "Apple", color: "Red", price: "Cheap" },
  { name: "Orange", color: "Orange", price: "Cheap" },
  { name: "Avocado", color: "Green", price: "Expensive" }
]

// Nótese que es "fruit" y no "fruits" dado que es un parámetro para que la función itere el cual es distinto de la variable que contiene los valores en forma de array. En particular, el parámetro se pasa en forma singular en relación al nombre del array, por ejemplo, si el array fuese "listOfContacts" o "contacts" el nombre del parámetro debería ser "contact" 
fruits.forEach(function (fruit) {
  console.log(fruit.name)
})


