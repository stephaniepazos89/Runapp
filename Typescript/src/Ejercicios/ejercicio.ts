import { Actividad } from "../Actividad/actividad";
import { GruposMusculares } from "../Grupos Musculares/gruposMusculares";

export abstract class Ejercicio{

    constructor(public frecuenciaCardiacaBase:number,public minutosDeDescanso:number,public unaActividad:Actividad){}

    abstract duracion():number;

    
    gruposMuscularesQueEntrena():Set<GruposMusculares>{
        return this.unaActividad.gruposMuscularesQueEntrena
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