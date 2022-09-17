import { GruposMusculares } from 'src/domain/Grupos Musculares/gruposMusculares'
import { RutinaJson } from '../Rutina/rutina'

type DiaDeEntrenamiento = {
	nombre:Dias,
	minutosDeEntrenamiento:number	
}
export class Usuario{

    public nombreUsuario = ""
    public apellido = ""
    constructor(public id:number= 0,public username="", 
    public password?:string,
    public gruposMuscularesDePreferencia:GruposMusculares[]=[], 
    public posiblesAmigos:Usuario[]=[], 
    public listaDeAmigos:Usuario[]=[],
    public datos="",
    public frecuenciaCardiacaReposo="", 
    public fecha?:Date,
    public porcentajeDeIntensidadDeEntrenamiento:string = "", 
    public diasDeEntrenamiento:DiaDeEntrenamiento[]=[]){
        
    }

    static fromJson(rutinaJson:RutinaJson):Usuario{
        const usuario = new Usuario()
        usuario.nombreUsuario = rutinaJson.nombreCreador
        usuario.apellido = rutinaJson.apellidoCreador
        return usuario
    
    }

    nombreApellido(){
        return this.nombreUsuario + '' + '' + this.apellido
    }

}

// export const USUARIO_2 = new Usuario()
// USUARIO_2.nombre = 'Maxi'
// USUARIO_2.apellido = 'Lopez'

export enum Dias{
    lunes="L",
    martes="M",
    miercoles="M",
    jueves="J",
    viernes="V",
    sabado="S",
    domingo="D"
  }