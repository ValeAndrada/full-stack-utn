// 1) Traer elementos HTML a manipular
// 2) Definir un evento (acción que un usuario puede hacer y que desencadena otra acción)
// Por ejemplo, en "$btnMessage.addEventListener("click", sendMessage)"; cuando el usuario haga click en el botón (evento), se ejecuta la función de enviar mensaje 

const $userInput = document.querySelector(".user-input")
const $btnMessage = document.querySelector(".btn-send-message")
const $chatMessages = document.querySelector(".chat-messages")

// Explicación de la función
// 1) Capturar el valor del input
// 2) Crear un div (dado que esta etiqueta es el contenedor padre del mensaje)
// 3) A ese div, agregarlo en la clase "message", "sent" dado que enviaremos un mensaje
// 4) Crear un párrafo (el cual va a contener el texto del mensaje, es decir, el valor del input)
// 5) Dentro de ese div, se agrega el párrafo con el valor del input colocado por el usuario
// 6) Insertar el div dentro del contenedor principal del chat

function sendMessage() {
  const userMessage = $userInput.value
  // Como cada chat tiene la misma estructura HTML (esto es, un div que contiene un p con el texto de un mensaje y otro p con la hora en que se envió el mismo), se debe generar dinámicamente lo mismo desde Javascript para que, ante cada nuevo mensaje, se agrege esta misma estructur debajo de cada uno de estos nuevos mensajes
  const $createDiv = document.createElement("div")
  // En este caso, vamos a visualizar los mensajes enviados (porque seremos nosotros los que apretemos el botón de enviar), por lo que, el mensaje se visualizará con el estilo de mensaje enviado (clase correspondiente: "message sent") y no con el estilo de mensaje recibido. Como un elemento HTML puede tener muchas clases, se utiliza la propiedad classList para referenciar la clase en cuestión
  $createDiv.classList.add("message", "sent")
  // Al contenedor padre, se le agrega un nuevo hijo (cada nuevo hijo es cada nuevo mensaje)
  const $createP = document.createElement("p")
  $createP.textContent = userMessage
  $createDiv.appendChild($createP)
  // Timestamp
  const $createSpan = document.createElement("span")
  $createSpan.classList.add("timestamp")
  $createSpan.textContent = new Date().toLocaleTimeString()
  $createDiv.appendChild($createSpan)
  $chatMessages.appendChild($createDiv)
}

// Limpiar el input

function cleanSentInput() {
  $userInput.value = ""
}

// Función anónima: la ventaja en este caso en particular es que la función anónima permite ejecutar múltiples funciones ante un solo evento (enviar el mensaje y limpiar el input ante un click, específicamente)

$btnMessage.addEventListener("click", () => {
  sendMessage();
  cleanSentInput();
})

// Código asíncrono: mientras se espera el tiempo configurado, se pueden ejecutar otras cosas

// setTimeout(function () {
// console.log("Hola")
// }, 6000)

// Las llaves determinan el scope de una función y, a su vez, actúan como una zona privada, es decir, por ejemplo, esta línea de código "const createDiv = document.createElement("div")" ya forma parte de la función sendMessage, por lo que, si la coloco dentro de esa misma función, dará error. Ahora bien, si la coloco dentro de otra función, por ejemplo, cleanSentInput, me permitirá incorporarla dado que es una otra/nueva zona privada (por las llaves) la cual está asilada del resto del código

setTimeout(function () {
  const $createDiv = document.createElement("div")
  $createDiv.classList.add("message", "received")
  const $createP = document.createElement("p")
  $createP.textContent = "Recibido"
  $createDiv.appendChild($createP)
  const $createSpan = document.createElement("span")
  $createSpan.classList.add("timestamp")
  $createSpan.textContent = new Date().toLocaleTimeString()
  $createDiv.appendChild($createSpan)
  $chatMessages.appendChild($createDiv)
}, 5000)
