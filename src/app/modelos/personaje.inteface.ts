export interface personajeI{
   
    [x: string]: any;
    

    energia:bigint
    especie: {id: string, nombre: string, estadoRegistro: bigint, fechaModificacion: string};
    estadoRegistro: bigint
    fechaModificacion: string
    fuerza: bigint
    id: string
    jugador: {id: string, cuenta: string, contrasena: string, apodo:string, email: string,estadoRegistro: bigint
        fechaModificacion: string};
    mana: bigint
    nombre: string

}