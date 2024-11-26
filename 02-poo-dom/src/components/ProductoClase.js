

export class ProductoClase {
    #nombre
    #precio
    #stock

    constructor(nombre, precio, stock){
        this.#nombre = nombre;
        this.#precio = precio;
        this.#stock = stock;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

    setPrecio(precio){
        this.#precio = precio;
    }

    getPrecio(){
        return this.#precio;
    }

    setStock(stock){
        this.#stock = stock;
    }

    getStock(){
        return this.#stock;
    }

    actualizarStock(cantidad){
        this.#stock += cantidad;

        return `La cantidad de productos ahora es ${this.getStock()}`;
    }

    obtenerInfo(){
        return `Nombre: ${this.getNombre()} Precio: ${this.getPrecio()} Cantidad: ${this.getStock()}`;
    }
}