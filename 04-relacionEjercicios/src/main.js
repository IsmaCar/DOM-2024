//--------Ejercicio 3-----------

// import { Empleado, EmpleadoFreelance } from "./helpers/ejercicio3";

// console.log("Ejercicio 3");
// const empleado1 = new Empleado("Juan", 25, "junior");
// const empleado2 = new Empleado("Ana", 30, "senior");

// empleado1.info();
// empleado2.info();

// const freelance1 = new EmpleadoFreelance("Pepe", 35, 55);
// const freelance2 = new EmpleadoFreelance("Maria", 40, 60);

// //freelance1.info();
// freelance2.info();

//--------Ejercicio 3-----------

import { GestionUsuariosClase,UsuarioClase } from "./helpers/ejercicio7";

function handlerBuscarUsuario(e) {
    e.preventDefault();
    alert("Buscar usuario");
  }
  
  (async function () {
    function handlerClickEliminar(e) {
      if (e.target.classList.contains("btn-eliminar")) {
        const indice = e.target.dataset.id;
        // eliminar el usuario que está en la posición del array[indice]
        gestorUser.usuarios.splice(indice, 1);
        divListaUsuarios.innerHTML = gestorUser.usuarios
          .map((user, index) => {
            return `
        <li data-id="${index}">
          ${user.info()} 
          <button class="btn-eliminar" data-id="${index}" >Eliminar</button>
        </li>
        `;
          })
          .join("");
      }
    }
  
    const gestorUser = new GestionUsuariosClase();
    console.log("Fetch Usuarios -->", await gestorUser.fetchUsuarios());
  
    // pintamos en el dom
    const app = document.getElementById("app");
    const h1Element = document.createElement("h1");
    h1Element.textContent = "Uso de POO con JsonPlaceHolder";
    app.appendChild(h1Element);
    const divBuscarUsuarios = document.createElement("div");
    divBuscarUsuarios.id = "buscar-usuarios";
    app.appendChild(divBuscarUsuarios);
    divBuscarUsuarios.innerHTML = `
      <form id="form-usuario">
      <input id="nombre-buscar" type="text" placeholder="Nombre a buscar" />
      <button type="submit" id="buscar" class="btn-buscar">Buscar</button>
    </form>`;
  
    const divListaUsuarios = document.createElement("div");
    divListaUsuarios.id = "lista-usuarios";
    app.appendChild(divListaUsuarios);
  
    divListaUsuarios.innerHTML = gestorUser.usuarios
      .map((user, index) => {
        return `
        <li data-id="${index}">
          ${user.info()} 
          <button class="btn-eliminar" data-id="${index}" >Eliminar</button>
        </li>
        `;
      })
      .join("");
  
    document
      .getElementById("lista-usuarios")
      .addEventListener("click", handlerClickEliminar);
  
    document
      .querySelector("#form-usuario")
      .addEventListener("submit", handlerBuscarUsuario);
  })();


