import { Rutina } from 'src/domain/Rutina/rutina';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busquedaRutinaPipe'
})

export class BusquedaRutinaPipePipe implements PipeTransform {

  transform(Rutinas : Rutina[], rutinaABuscar: string): Rutina[] {
    return Rutinas.filter(rutina => !rutinaABuscar || this.coincide(rutina.nombreRutina,rutinaABuscar))
  }

  coincide(valor1:string,valor2: string){
    return valor1.toLowerCase().match(valor2.toLowerCase())
  }

}
