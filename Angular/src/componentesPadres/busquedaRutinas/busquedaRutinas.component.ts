import { Component, OnInit } from '@angular/core';
import { RutinaService } from 'src/app/services/rutinaService/rutina.service';
import { Rutina } from 'src/domain/Rutina/rutina';

@Component({
  selector: 'app-busquedaRutinas',
  templateUrl: './busquedaRutinas.component.html',
  styleUrls: ['./busquedaRutinas.component.css']
})
export class BusquedaRutinasComponent implements OnInit {

  rutinas:Rutina[] = []
  rutinaABuscar = ""

  constructor(private servicioRutinas: RutinaService) {}

  async ngOnInit() {
    await this.servicioRutinas.traerListaRutinas().then((resultado) => {
      this.rutinas = resultado.map(rutina => Rutina.fromJson(rutina))
      console.log(this.rutinas)
    }).catch((errorCatched)=>{
      console.log("No se encontraron rutinas")
    })
  }

}
