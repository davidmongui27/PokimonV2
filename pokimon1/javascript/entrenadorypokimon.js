class Pokimon {
    constructor(nombre, tipo, ataque, defensa, habilidad, evolucion) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.ataque = ataque;
        this.defensa = defensa;
        this.habilidad = habilidad;
        this.evolucion = evolucion;
    }
}

class Entrenador {
    constructor(nombre, edad, nivel = 1) {
        this.nombre = nombre;
        this.edad = edad;
        this.nivel = nivel;
        this.pokimones = [];
    }

    agregarPokimon(pokimon) {
        this.pokimones.push(pokimon);
    }
}
