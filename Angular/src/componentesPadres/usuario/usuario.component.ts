import { ListaDeAmigosServiceService } from './../../app/services/listaDeAmigosService/listaDeAmigosService.service'
import { Component, Input, OnInit } from '@angular/core'
import { Dias, Usuario } from 'src/domain/Usuario/usuario'
import { GruposMusculares } from 'src/domain/Grupos Musculares/gruposMusculares'
import { Router } from '@angular/router'
// const usuario1 = new Usuario(1)
// const usuario2 = new Usuario(2)
// const usuario3 = new Usuario(3)
// const usuario4 = new Usuario(4)
// const usuario5 = new Usuario(5)
// usuario1.nombre = "Ruperta"
// usuario1.apellido = "Siniestra"
// usuario2.nombre = "Pancracio"
// usuario2.apellido = "Gelatina"
// usuario3.nombre = "Romulo"
// usuario3.apellido = "Colmena"
// usuario4.nombre = "Clementino"
// usuario4.apellido = "Coraje"
// usuario5.nombre = "Evaristo"
// usuario5.apellido = "Demente"
 

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  usuario=new Usuario()
  fecha=""
  listaDeAmigos:Usuario[]=[]
  posiblesAmigos:Usuario[]=[]
  posibleAmigoSeleccionado!:Usuario
  @Input() diasDeSemana!:string


  constructor(private listaDeAmigosService:ListaDeAmigosServiceService, public router:Router){}
  
  validarcampos():void{
    if(this.usuario.datos === "") {
      throw Error("El campo nombre y apellido es obligatorio") 
    }else if (this.usuario.username === ""){
      throw Error("El campo username es obligatorio")
    }else if (this.usuario.frecuenciaCardiacaReposo === ""){
      throw Error("El campo frecuencia cardíaca en reposo es obligatorio")
    }else if (!this.fecha){
      throw Error("El campo fecha de nacimiento es obligatorio")
    } else if (this.usuario.porcentajeDeIntensidadDeEntrenamiento == ""){
      throw Error ("El campo porcentaje de intensidad es obligatorio")
    }
  }

  agregarGrupoPreferido(grupo:string){ 
    if(this.usuario.gruposMuscularesDePreferencia.includes(grupo as GruposMusculares)){
      this.usuario.gruposMuscularesDePreferencia.splice(this.usuario.gruposMuscularesDePreferencia.indexOf(grupo as GruposMusculares), 1)
    }else{
      this.usuario.gruposMuscularesDePreferencia.push(grupo as GruposMusculares)
    }
    console.log(this.usuario)
  }

  async ngOnInit(){
    this.usuario.diasDeEntrenamiento = [
      {nombre:Dias.lunes,minutosDeEntrenamiento:0},
      {nombre:Dias.martes,minutosDeEntrenamiento:0},
      {nombre:Dias.miercoles,minutosDeEntrenamiento:0},
      {nombre:Dias.jueves,minutosDeEntrenamiento:0},
      {nombre:Dias.viernes,minutosDeEntrenamiento:0},
      {nombre:Dias.sabado,minutosDeEntrenamiento:0},
      {nombre:Dias.domingo,minutosDeEntrenamiento:0}
    ]
    const id = localStorage.getItem("id")
    if(id !== null){
      console.log("usuario del back")
      this.usuario = await this.listaDeAmigosService.traerUsuarioPorId(id)
      console.log(this.usuario)
    }else{
      this.router.navigate(['/login'])
    }
    
  }

  agregarAmigo(){
    this.posiblesAmigos=this.posiblesAmigos.filter(itemAmigo => itemAmigo !== this.posibleAmigoSeleccionado)
    this.listaDeAmigos.push(this.posibleAmigoSeleccionado)
  }

  eliminarAmigo(amigo:Usuario){
    this.usuario.listaDeAmigos = this.usuario.listaDeAmigos.filter(itemAmigo => itemAmigo !== amigo)
    this.usuario.posiblesAmigos.push(amigo)
  }
}

