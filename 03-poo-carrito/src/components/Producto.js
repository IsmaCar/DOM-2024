
export class Producto {
    //Propiedades privadas/publicas
    #precio;
    //Constructor
    constructor(nombre,cantidad,precio){
        this.nombre = nombre;
        this.cantidad = cantidad
        this.#precio = precio
    }
    //Métodos

    getPrecio(){
        return this.#precio;
    }

    setPrecio(newPrecio){
        this.#precio = newPrecio;
    }

    calcularTotal(){
        return this.#precio*this.cantidad;
    }

    obtenerInfo(){
        return `Nombre: ${this.nombre}, Precio: ${this.cantidad}, Cantidad: ${this.#precio} Total: ${this.calcularTotal()}`                          
    }
}