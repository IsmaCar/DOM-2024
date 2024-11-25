

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
        this.#nombre = nombre
    }

    getNombre(nombre){
        return this.#nombre = nombre
    }

    setPrecio(precio){
        this.#precio = precio
    }

    getPrecio(precio){
        return this.#precio = precio
    }

    setStock(stock){
        this.#stock = stock
    }

    getStock(stock){
        return this.#stock = stock
    }

    actualizarStock(cantidad){
        this.#stock += cantidad

        return `La cantidad de productos ahora es ${this.getStock}`
    }

    obtenerInfo(){
        return `Nombre: ${this.getNombre} Precio: ${this.getPrecio} Cantidad: ${this.getStock}`
    }
}