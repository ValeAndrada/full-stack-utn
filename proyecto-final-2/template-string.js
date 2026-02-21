const $userScreen = document.querySelector("#user-in-screen")

// Para que el código Javascript tome etiquetas HTML como código y no como texto, se utiliza ".innerHTML"
// $userScreen.innerHTML = "<span>J</span>uan <strong>Pérez</strong><button>Presione aquí</button>"
// Ahora bien, de la manera anterior, no toma los saltos de línea (por las comillas "comunes"), por lo que, para que sí los tome, se debe escribir el código en un template string

// const lastName = "Pérez"
// $userScreen.innerHTML = `<span>J</span>uan
// <strong class="bold">${lastName}</strong>
// <button id="btn-example">Presione aquí</button>
// `

const $userInput = document.querySelector(".user-input")
const $btnMessage = document.querySelector(".btn-send-message")
const $chatMessages = document.querySelector(".chat-messages")

$btnMessage.addEventListener("click", sendMessage)

function sendMessage() {
  const userMessage = $userInput.value
  // "+=" significa dejar los mensajes que ya están y agregar los nuevos; de lo contrario, se va a reemplazar todo el contenido HTML del contenedor por lo que se declare en este template
  $chatMessages.innerHTML += `
<div class="message sent">
<p>${userMessage}</p>
<span class="timestamp">${new Date().toLocaleTimeString()}</span>
</div>
`
  $userInput.value = ""
}

setTimeout(function () {
  $chatMessages.innerHTML += `
<div class="message received">
    <p>Recibido</p>
    <span class="timestamp">${new Date().toLocaleTimeString()}</span>
  </div>
  `
}, 5000)




