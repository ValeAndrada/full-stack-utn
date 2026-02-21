const $contacts = document.querySelector(".contacts")
const $sidebarSearchInput = document.querySelector(".search")

const contactsList = [
  { name: "Juan Pérez", status: "Online" },
  { name: "Pedro Rodríguez", status: "Offline" },
  { name: "Carlos Juárez", status: "Online" },
  { name: "Enrique González", status: "Offline" },
  { name: "Pedro Juárez", status: "Online" },
  { name: "Juan Martínez", status: "Online" },
  { name: "Nicolás Pérez", status: "Offline" },
  { name: "Ernesto Segovia", status: "Offline" },
  { name: "Enrique Márquez", status: "Offline" },
  { name: "Ricardo González", status: "Offline" },
];

function sidebarContacts(listOfContacts) {
  // $contacts es el elemento del DOM que contiene todos los elementos <li> de la lista de contactos.
  // Al asignarle una cadena vacía ("") a la propiedad .innerHTML, se elimina todo el HTML que estaba dentro de ese elemento contenedor.
  // Es por esto que, el elemento $contacts queda completamente vacío, es decir, si antes tenía 10 elementos <li>, después de esta línea no tendrá ninguno.
  // Básicamente, es una "limpieza" antes de recargar la lista. Si no haces esto, cada vez que se llame a sidebarContacts() (ya sea para mostrar la lista completa o la lista filtrada), por ejemplo, como al final de function searchContacts(), los nuevos contactos se agregarían debajo de los contactos que ya estaban, lo que causaría duplicados
  $contacts.innerHTML = ""
  listOfContacts.forEach(function (contact) {
    const lowerCaseStatus = contact.status.toLowerCase()
    let classStatus = ""

    //El forEach por si mismo ya itera sobre los elementos del array, por lo que, no es necesario generar otro bucle dentro. Solo lo dejo para conocimiento
    if (lowerCaseStatus === "online") {
      classStatus = "online"
    } else {
      classStatus = "offline"
    }

    $contacts.innerHTML += `
    <li class="Contacts">
      <img src="./profile.png" alt="Imagen de perfil de ${contact.name}">
        <div>
          <h6>${contact.name}</h6>
          <p class="status ${classStatus}">${contact.status}</p>
        </div>
    </li>
    `
  })
}

sidebarContacts(contactsList)

// Otra forma de hacerlo:
//  $contacts.innerHTML += `
//   <li class="contacts">
//   <img src="./profile.png" alt="Imagen de perfil de ${contact.name}">
//            <div>
//                <h6>${contact.name}</h6>
//              <p class="${contact.status === "Online" ? "status online" : "status offline"}">${contact.status}</p>
//            </div>
//        </li>
// `

// <p class="${contact.status === "Online" ? "status online" : "status offline"}">${contactsList.status}</p>: esto se llama operador ternario

$sidebarSearchInput.addEventListener("input", searchContacts)

function searchContacts() {
  // Se crea una variable que contendrá el input en la barra de búsqueda de contactos y lo convierte todo a minúsuculas
  const inputLetters = $sidebarSearchInput.value.toLowerCase()
  // Se crea un array vacío para ir pasando los contactos que se obtengan como resultado del filtrado, es decir, por ejemplo, si se escribe "Juan", solo listará los contactos con ese nombre
  const contactsFilter = []
  // Se crea un bucle el cual, para cada contacto dentro del array que contiene todos los contactos, se busque aquellos contactos cuyo nombre (convertido a minúsculas para compararlo con el valor del input que, anteriormente, también, se había convertido a minúsculas) incluya alguna de las letras que tipee el usuario
  contactsList.forEach(function (contact) {
    if (contact.name.toLowerCase().includes(inputLetters)) {
      // Los contactos que contengan alguna de las letras que tipee el usuario, se envíán al array vacío
      contactsFilter.push(contact)
    }
  })
  // Se llama a la función que se creó anteriormente para modificar el HTML de la sidebar y se le pasa como argumento el array con los contactos filtrados, es decir, aquellos contactos que contengan alguna de las letras que tipee el usuario
  sidebarContacts(contactsFilter)
}