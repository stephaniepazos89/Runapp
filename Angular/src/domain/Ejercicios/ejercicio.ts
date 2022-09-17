import { ABDOMINALES, Actividad, GLUTEOS, PIERNAS } from "../Actividad/actividad";
import { GruposMusculares } from "../Grupos Musculares/gruposMusculares";

export abstract class Ejercicio{

    id!:number

    constructor(public frecuenciaCardiacaBase:number,public minutosDeDescanso:number,public unaActividad:Actividad){}

    abstract duracion():number;

    
    gruposMuscularesQueEntrena():Set<string>{
        return this.unaActividad.gruposMuscularesQueEntrena
    }

    nombre():string{
        return this.unaActividad.nombre
    }
}

export class EjercicioSimple extends Ejercicio{

    constructor(private minutosDeTrabajo:number,frecuenciaCardiacaBase:number,minutosDeDescanso:number,unaActividad:Actividad){
        super(frecuenciaCardiacaBase,minutosDeDescanso,unaActividad)
    }

    duracion():number{
        return this.minutosDeTrabajo + this.minutosDeDescanso;
    }

}

export class EjercicioCompuesto extends Ejercicio{

    constructor(private serie:number,frecuenciaCardiacaBase:number,minutosDeDescanso:number,unaActividad:Actividad){
        super(frecuenciaCardiacaBase,minutosDeDescanso,unaActividad)
    }

    duracion():number{
        return this.minutosDeDescanso * this.serie * 2;
    }

}

export const EJERCICIO_1 = new EjercicioSimple(10,63,5,ABDOMINALES)
export const EJERCICIO_2 = new EjercicioSimple(30,100,10,PIERNAS)
export const EJERCICIO_3 = new EjercicioSimple(40,80,8,GLUTEOS)
