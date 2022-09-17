import { Router } from '@angular/router';
import { RutinaService } from './../../app/services/rutinaService/rutina.service';
import { Rutina } from 'src/domain/Rutina/rutina';
import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-misRutinas',
  templateUrl: './misRutinas.component.html',
  styleUrls: ['./misRutinas.component.css']
})
export class MisRutinasComponent implements OnInit {

  rutinas:Rutina[] = []

  constructor(private servicioRutinas: RutinaService, private router: Router) {}

  async ngOnInit() { //localStorage.get("id")
    await this.servicioRutinas.traerMisRutinas(1).then((resultado) => {
      this.rutinas = resultado.map(rutina => Rutina.fromJson(rutina))
      console.log(this.rutinas)
    }).catch((errorCatched)=>{
      console.log("No se encontraron rutinas")
    })
  }
  
  editarRutina(rutinaId:number){
    console.log("Hola?")
    this.router.navigate(['/rutina/'+rutinaId])
  }
}