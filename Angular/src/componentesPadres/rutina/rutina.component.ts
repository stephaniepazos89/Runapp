
import { Component, OnInit } from '@angular/core'
import { RutinaService } from '../../app/services/rutinaService/rutina.service'
import { Ejercicio } from 'src/domain/Ejercicios/ejercicio'
import { EjercicioService } from '../../app/services/ejercicioService/ejercicio.service'

import { ActivatedRoute, Router } from '@angular/router'
import { Rutina } from 'src/domain/Rutina/rutina'
import {CRITERIOS_EDICION} from 'src/domain/CriterioDeEdicion/criterioDeEdicion'


@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit{
 
  criteriosDeEdicion = CRITERIOS_EDICION
  rutina!:Rutina 
  rutinasConocidas!:Rutina[]
  idRutina!:number

  constructor(private rutinaService:RutinaService,private router:Router,private rutaEnviada:ActivatedRoute,
    private ejercicioService:EjercicioService) {
      this.rutaEnviada.params.subscribe(parametro=>{
        this.idRutina = parametro['id']
      })
    }

  async ngOnInit(){
    this.rutina = await this.rutinaService.traerRutina(this.idRutina)
    console.info('Nombre de la rutina en el ngOnInit: '+this.rutina.nombreRutina)
  }
  
  async guardarRutina(){
      this.rutina.validarCampos()
      await this.rutinaService.actualizarRutina(this.rutina)
  }

  // redirigirCancelar(){
    
  // }

  sumarEjercicio(){
    console.log('El id en sumarEjercicio vale: '+this.idRutina)
    this.router.navigate(['/ejercicio/'+ this.idRutina])
  }

  eliminarEjercicio(unEjercicio:Ejercicio){
    this.rutina.eliminarEjercicio(unEjercicio)
  }

}

