import { GLUTEOS } from '../Actividad/actividad'
import { CriterioDeEdicion, FREE } from '../CriterioDeEdicion/criterioDeEdicion'
import {
  Ejercicio,
  EJERCICIO_1,
  EJERCICIO_2,
  EJERCICIO_3
} from '../Ejercicios/ejercicio'
import { GruposMusculares } from '../Grupos Musculares/gruposMusculares'
import { Usuario} from '../Usuario/usuario'


export type RutinaJson = {
  id:number
  ejercicios:Ejercicio[]
  nombreRutina:string
  nombreCreador:string
  apellidoCreador:string
  descripcion:string
  criterioDeEdicion:CriterioDeEdicion
}

class MensajeErroneo {
  constructor(public campo: string, public mensaje: string) {}
}
export class Rutina {
  nombreCreador: string = ""
  apellidoCreador: string = ""
  criterioDeEdicion: CriterioDeEdicion = FREE
  descripcion!: string
  id: number = 1 
  mensajesErroneos: MensajeErroneo[] = []
  
  constructor(public creador: Usuario, public nombreRutina: string, public ejercicios:Ejercicio[]=[]) {}
  

  static fromJson(rutinaJson:any): Rutina{
    const rutina = new Rutina(
      Usuario.fromJson(rutinaJson),
      rutinaJson.nombreRutina,
      rutinaJson.ejercicios
    )
    rutina.duracion = rutinaJson.duracion
    rutina.nombreCreador = rutinaJson.nombreCreador
    rutina.apellidoCreador = rutinaJson.apellidoCreador
    rutina.descripcion = rutinaJson.descripcion
    rutina.criterioDeEdicion = rutinaJson.criterioDeEdicion
    return rutina
  }

  toJson():RutinaJson{
    return {
      id:this.id,
      ejercicios:this.ejercicios,
      nombreRutina:this.nombreRutina,
      nombreCreador:this.creador.nombreUsuario,
      apellidoCreador:this.creador.apellido,
      descripcion:this.descripcion,
      criterioDeEdicion:this.criterioDeEdicion
    }
  }

  duracion(): number {
    return this.ejercicios.reduce(
      (acum, ejercicio) => acum + ejercicio.duracion(),
      0
    )
  }

  frecuenciaCardiacaBase(): number {
    if (!this.hayEjercicios()) {
      return 0
    } else {
      return (
        this.ejercicios.reduce(
          (acum, ejercicio) => acum + ejercicio.frecuenciaCardiacaBase,
          0
        ) / this.ejercicios.length
      )
    }
  }

  hayEjercicios(): boolean {
    return this.ejercicios.length > 0
  }

  gruposMuscularesQueEntrena():Set<string>{
     const grupos = new Set(this.ejercicios.flatMap (unEjercicio => Array.from(unEjercicio.gruposMuscularesQueEntrena())))
     return grupos
  }

  // gruposMuscularesQueEntrena1(): string[] {
  //   return ['Piernas', 'Brazos', 'Hombros']
  // }

  agregarEjercicio(unEjercicio: Ejercicio): void {
    console.log('Nombre del ejercicio a agregar: '+ unEjercicio.nombre())
    this.ejercicios.push(unEjercicio)
  }

  eliminarEjercicio(ejercicioAEliminar: Ejercicio) {
    console.log(ejercicioAEliminar)
    const ejerciciosFiltrados = this.ejercicios.filter(
      (ejercicio) => ejercicio.id !== ejercicioAEliminar.id
    )
    this.ejercicios = ejerciciosFiltrados
  }

  // esEditable(unUsuario:Usuario){
  //     return this.creador == unUsuario || this.unCriterioDeEdicion.rutinaPuedeSerEditadaPor(unUsuario, this);
  // }

  validarCampos() {
    this.mensajesErroneos.length = 0
    if (!this.nombreRutina) {
      this.añadirError('campoNombre', 'Debe ingresar un nombre para la rutina')
    }
    if (!this.descripcion) {
      this.añadirError('campoDescripcion', 'Debe ingresar una descripcion')
    }
  }

  añadirError(campo: string, mensaje: string) {
    this.mensajesErroneos.push(new MensajeErroneo(campo, mensaje))
  }

  tieneMensajesErroneos(campo: string): boolean {
    return this.mensajesErroneos.some((error) => error.campo == campo)
  }

  erroresSobre(campo: string) {
    return this.mensajesErroneos
      .filter((error) => error.campo == campo)
      .map((error) => error.mensaje)
      .join('. ')
  }
}

const unNombre = 'Isquitibiales'

// export const RUTINA = new Rutina(USUARIO_CREADOR, unNombre)
// RUTINA.ejercicios = [EJERCICIO_1, EJERCICIO_2, EJERCICIO_3]

// RUTINA.descripcion = 'Esta es una rutina sabrosa'
// RUTINA.agregarEjercicio(EJERCICIO_3)

// export const RUTINA2 = new Rutina(USUARIO_2, "Gluteales")
// RUTINA2.descripcion = 'La mejor rutina para el posterior'
// RUTINA2.agregarEjercicio(EJERCICIO_1)
// RUTINA2.agregarEjercicio(EJERCICIO_2)
