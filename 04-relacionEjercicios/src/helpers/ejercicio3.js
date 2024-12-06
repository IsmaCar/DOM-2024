
export function Empleado(nombre, edad, puesto){
    
    this.nombre = nombre;
    this.edad = edad;
    this.puesto = puesto;

    //método compartido.

    Empleado.prototype.calcularSalario = function() {
        
        const salarioBase = {
            "junior": 1500,
            "semi-Senior": 2000,
            "senior": 3000
        }

        return salarioBase[this.puesto] || 0;

    }

    Empleado.prototype.info = function () {
        
        console.log(`Nombre: ${this.nombre}, 
                     Edad: ${this.edad}, 
                     Puesto: ${this.puesto}
                     Salario: ${this.calcularSalario()}
                     `);
    }

}

/**
 * @author Ismael Carballo Martin
 * @param {String} nombre 
 * @param {Number} edad 
 * @param {Number} precioHora 
 */

export function EmpleadoFreelance(nombre, edad, precioHora){

    Empleado.call(this, nombre, edad, "freelance");

    this.precioHora = precioHora;

    //Métodos prototipico de la clase padre

    EmpleadoFreelance.prototype = Object.create(Empleado.prototype);
    EmpleadoFreelance.prototype.constructor = EmpleadoFreelance;

    Empleado.prototype.info = function (numHoras) {
        
        console.log(`Nombre: ${this.nombre}, 
                     Edad: ${this.edad}, 
                     Puesto: ${this.puesto}
                     Salario: ${this.calcularSalario(numHoras)}
                     `);
    }

    EmpleadoFreelance.prototype.calcularSalario = function(numHoras) {
        return numHoras * this.precioHora;
    }
}


export class EmpleadoClases {

    constructor(nombre, precio, puesto){
        this.nombre= nombre;
        this.precio = precio;
        this.puesto = puesto;
    }

    calcularSalario() {
        const salarioBase = {
            "junior": 1500,
            "semi-Senior": 2000,
            "senior": 3000
        }

        return salarioBase[this.puesto] || 0;

    }

    info() {
        console.log(`Nombre: ${this.nombre}, 
            Edad: ${this.edad}, 
            Puesto: ${this.puesto}
            Salario: ${this.calcularSalario()}
            `);
    }

}

export class EmpleadoFreelance extends EmpleadoClases{ 
    constructor(nombre, edad, precioHora) {
        super(nombre, edad, "freelance");
        this.precioHora = precioHora;
    }

    info(numHoras) {
        console.log(`Nombre: ${this.nombre}, 
            Edad: ${this.edad}, 
            Puesto: ${this.puesto}
            Salario: ${this.calcularSalario(numHoras)}
            `);
    }

    calcularSalario(numHoras) {
        return this.precioHora * numHoras;
    }
}