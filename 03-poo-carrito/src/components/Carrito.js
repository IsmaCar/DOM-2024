import { Producto } from "./Producto"

 export default class Carrito {
    
    constructor(){
        //creamos un array de productos
        this.productos = []
    }

    //métodos
    addProduct(nombre,cantidad,precio){
        this.productos.push(new Producto(nombre,cantidad,precio));
        //Lo guardamos también en el localstorage
        this.guardarLocalStorage();

    }

    deleteProduct(index){
        this.productos.splice(index,1)
        //Lo modifico en el localstorage
        this.guardarLocalStorage();
    }

    updateProduct(index,newCantidad){
        
        if(newCantidad>0){
            this.productos[index].cantidad = newCantidad;
        //Actualizar el localstorage
        this.guardarLocalStorage();
        }
    }

    calcularTotalCarrito(){
        return this.productos.reduce((acc,producto)=> acc + producto.calcularTotal(),0);
    }

    guardarLocalStorage(){
        //setItem(clave,valor) -> pra guardar hay que hacer un stringuify
        localStorage.setItem("Carrito",JSON.stringify(this.productos));
    }

    cargarLocalStorage(){
        //getItem
        //Comprobar que la clave existe
        //localStorage.hasOwnProperty("Carrito")
        const datosCarrito = JSON.parse(localStorage.getItem("Carrito"));
        
        //crear un array de productos
        if(datosCarrito){
            this.productos = datosCarrito.map((producto)=> new Producto(producto.nombre, producto.cantidad, producto.cantidad));
        }
    }
}