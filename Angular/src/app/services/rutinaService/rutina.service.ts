import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CriterioDeEdicion } from 'src/domain/CriterioDeEdicion/criterioDeEdicion';
import { Ejercicio } from 'src/domain/Ejercicios/ejercicio';
import { Rutina, RutinaJson } from 'src/domain/Rutina/rutina';


@Injectable({
  providedIn: 'root'
})

export class RutinaService{
  
  
  rutinas:Rutina[] = []
  
  
  constructor(private http:HttpClient){
    // this.rutinas.push(RUTINA);
    // this.rutinas.push(RUTINA2);
  }
  
  async traerRutina(idRutina:number):Promise<Rutina>{
    const rutinaJson = await this.http.get<RutinaJson>('http://localhost:8080/rutina/'+idRutina).toPromise()
    return Rutina.fromJson(rutinaJson)
  }
  
  async actualizarRutina(rutina: Rutina) {
    await this.http.put('http://localhost:8080/rutinas/'+rutina.id,rutina.toJson()).toPromise()
  }
  
  async traerListaRutinas():Promise<Rutina[]> {
    const rutinas = await this.http.get<Rutina[]>('http://localhost:8080/rutinas').toPromise()
    return rutinas
  }

  async traerMisRutinas(id: number):Promise<Rutina[]> {
    const rutinas = await this.http.get<Rutina[]>('http://localhost:8080/misRutinas/'+ id).toPromise()
    return rutinas
  }
  
}
