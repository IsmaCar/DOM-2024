// document.addEventListener("DOMContentLoaded", function() {});


const init = () =>{ }


//----------------- Inicio de la app -----------------------
document.addEventListener("DOMContentLoaded", ()=>{
//1.-Selecciona el elemento 'h1' por su ID
//Seleccion por Id
const elementDiv = document.getElementById("contenedorPrincipal");
const elementH1 = elementDiv.querySelector("h1");
// Toda la etiqueta
//console.log(elementH1);

//Solo el texto
console.log(elementH1.textContent);

//2.-Selecciona todos los párrafos con la clase "parrafo" dentro 
//del `contenedorSecundario`.
//Selección por clase
 const parrafosDiv = document.querySelectorAll("#contenedorPrincipal .parrafo");
 console.log(parrafosDiv);

//3.-Selecciona el elemento `img` por su atributo `src`.

const elementImg = document.querySelector('img[src="imagen.png"]');
console.log(elementImg);

//4.-Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.

const elementSpan = document.querySelectorAll("#contenedorSecundario .etiqueta");
console.log(elementSpan);

//5.-Selecciona el primer párrafo con la clase "importante".

const elementParrafoImp = document.querySelector(".parrafo.importante");
console.log(elementParrafoImp.textContent);

//6.-Selecciona todos los párrafos que están dentro 
//de un elemento con el `id` "contenedorPrincipal".

const parrafosContPrin = document.querySelectorAll("#contenedorPrincipal p");
console.log(parrafosContPrin);

//7.-Selecciona todos los 
//elementos que tienen el atributo `data-atributo` con valor "valor1".

const elementosConAtributo = document.querySelectorAll("[data-atributo='valor1']");
console.log(elementosConAtributo);

//8.-Selecciona el segundo párrafo que está 
//dentro de un elemento con la clase "importante".

const parrafosImp = document.querySelectorAll(".parrafo.importante");
parrafosImp.length>1?console.log(parrafosImp[1]):null

//9.-Selecciona todos los elementos `<span>` 
//que están dentro de cualquier elemento con la clase "contenedor".

const elementosSpan = document.querySelectorAll("#contenedorSecundario span");
console.log(elementosSpan);

//10.-Selecciona el tercer párrafo dentro del `contenedorPrincipal` 
//que tiene la clase "parrafo".

const parrafoContPrin = document.querySelectorAll("#contenedorPrincipal .parrafo");
parrafosImp.length>2?console.log(parrafoContPrin[2]):null;
});