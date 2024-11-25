 //1.-Crear un clase para modelar un sistema de usuarios que puedan iniciar sesion, cerrar sesion
 // y actualiaz su perfil.

import { Producto } from "./components/Producto";

 //----------------- SOLUCIÓN CON FUNCIONES CONSTRUCTORAS ------------------------

// function Usuario(nombre,email,password){
//     this.nombre = nombre; //variables de instancia publica
//     this.email = email;
//     let _password = password; // variable de instancia privada

//     //metodos públicos

//     this.login = function(email, _password) { // no usar arrow function

//         //quiero evaluar si el email y password son correctos
//         if(this.email === email && _password === this.password){
//             return `Bienvenido ${this.nombre}`;
//         }
//         return "Email o password incorrectos"
//     }; 

//     this.updateEmail = function (newEmail){
//         this.email = newEmail;
//         return `Email actualizado a ${this.email}`;
//     };
// }

// const usuario1 = new Usuario("Juan", "juan@gmail.com", "11234");

// //------------ Lo mostramos en el DOM---------------------

// const app = document.getElementById("app");

// function renderUsuario () {
//     //función que pinta en el app del usuario
//     app.innerHTML = `
//     <h2>Usuario: ${usuario1.nombre}</h2>
//     <p>Email: ${usuario1.email}</p>
//     <button id="btnLogin">Login</button>`;

// //Añadir el evento del botón
// const btnLogin = document.getElementById("btnLogin");

// btnLogin.addEventListener("click", ()=> {
//     alert(usuario1.login("pepe@gmail.com","1234"));
// })

// }

// //-----------SOLUCIÓN CON CLASES----------------
// class Usuario {
//    //Las variables privadas se declaran anteponiendo # al nombre
//     #password

//     constructor(nombre,email,password){
//         this.nombre = nombre;
//         this.email = email;
//         this.#password = password;
//     }

//     login(email, password){
//         if(this.email === email && this.#password === password){
//             return `Bienvenido ${this.nombre}`;
//         }
//         return `Email o password incorrectos`
//     }

//     updateEmail(newEmail) {
//         this.email= newEmail;
//         return `Email actualizado a ${this.email}`
//     }

// }

// const usuario2 = new UsuarioClase("Pepe", "pepe@gmail.com", "1234");


//------------PRODUCTO-------------------

const productos =[
    new Producto("Portatil", 500, 10),
    new Producto("Movil", 1200,20),
    new Producto("Tablet", 300,5),
];

const app = document.getElementById("app");

app.innerHTML = `
<h2>Gestión de productos</h2>

${productos.map((producto,index)=>{
    return `<li> 
    ${producto.obtenerInfo()}
    <button class="btn-actualizar-stock" data-index="${index}">actualizar stock</button> 
    </li>`
}).join("")
}
`;

document.querySelectorAll(".btn-actualiza-stock")
    .forEach((btn)=>{
        btn.addEventListener("click", () => {
            alert("Actualizar Stock")
        });
    })