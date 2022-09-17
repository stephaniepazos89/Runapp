import { Injectable } from '@angular/core';
import { Actividad, ACTIVIDADES } from 'src/domain/Actividad/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  actividades!:Actividad[]

  constructor() {
    this.actividades = ACTIVIDADES
   }
}
