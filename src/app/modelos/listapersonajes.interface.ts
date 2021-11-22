export interface listpersonajesI{
    id:string;
    nombre:string;
    fuerza:bigint;
    mana:bigint;
    energia:bigint;
    especie:{id: string, nombre: string, estadoRegistro: bigint, fechaModificacion: Date};
    espenom:string;
    jugador:{id: string, cuenta: string, contrasena: string, apodo:string, email: string,estadoRegistro: bigint
        fechaModificacion: Date};
    estaReg:bigint;
    fechaMod:string;
    
}