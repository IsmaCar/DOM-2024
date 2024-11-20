//---------------Declaración Funciones---------------------
const handlerClickSpan = (e) => {
const span = e.target;
const randomColor = Math.floor(Math.random()*1677215).toString(16);
        //cambio el estilo inline de color
        span.style.backgroundColor = `#${randomColor}`;
}

const handlerDblClick = (e) => {
    const p = e.target;
    alert(p.textContent);

}
//------------Inicio App-------------------------
document.addEventListener("DOMContentLoaded", () => {
//1.-Añade un evento de clic a todos los elementos `<span>`
//dentro del `contenedorSecundario`. Cuando se haga clic, 
//cambia el color de fondo del elemento al azar.
 
// document.querySelectorAll("#contenedorSecundario span")
//     .forEach((span)=>{
//         //Asignar un evento al click de ese span.
//         span.addEventListener("click", handlerClickSpan);
//     });

//2.-Crea una función que muestre una alerta con el contenido 
//de cualquier párrafo que tenga la clase "parrafo" cuando se 
//haga doble clic en él.

// document.querySelectorAll(".parrafo")
//     .forEach((p)=>{
//         p.addEventListener("dblClick", handlerDblClick);
//     })

//4.-Crea una función que cambie el contenido de todos 
//los párrafos dentro del `contenedorSecundario` cuando se presione 
//la tecla "Enter". El nuevo contenido debe ser un texto aleatorio 
//(por ejemplo, "Nuevo contenido").

// document.addEventListener("keydown", (event) => {
//     if(event.key==="Enter"){
//         document.querySelectorAll("#contenedorSecundario p")
//         .forEach((parrafo)=>{
//             parrafo.textContent ="Has pulsado Enter"
//         })
//     }
// })

//5.-Añade un evento de clic a cualquier elemento 
//con la clase "etiqueta". Cuando se haga clic, 
//elimina el elemento del DOM.

// document.querySelectorAll(".etiqueta")
//     .forEach((etiqueta)=>{
//         etiqueta.addEventListener("click",() => {
//             etiqueta.remove();
//         })
//     })

//6.-Crea una función que cambie el color de todos los elementos `<span>` 
//dentro del `contenedorSecundario` cuando se mueva el mouse sobre ellos. 
//El nuevo color debe ser azul.

// document.querySelectorAll("#contenedorSecundario span")
//     .forEach((span) => {
//         span.addEventListener("mouseover", () => {
//             span.style.color="blue";
//         });
//         span.addEventListener("mouseout", () => {
//             span.style.color="";
//         });
//     })

//8.-Crea una función que cambie el tamaño del texto de todos 
//los párrafos dentro del `contenedorPrincipal` cuando se haga clic 
//en el elemento `img`. El nuevo tamaño debe ser el doble del tamaño actual.

// document.querySelector("#contenedorPrincipal img")
//     .addEventListener("click", () => {
//          document.querySelectorAll("#contenedorPrincipal p")
//          .forEach((parrafo) => {
//              const currentSize = window.getComputedStyle(parrafo).fontSize;
//              parrafo.style.fontSize=`${parseInt(currentSize) * 2}px`
//          })
//     })

//9.-Añade un evento de teclado a la página. Cuando se presione cualquier tecla, 
//muestra una alerta con el código de la tecla presionada.

// document.addEventListener("click", (event) => {
//     event.
//})
});