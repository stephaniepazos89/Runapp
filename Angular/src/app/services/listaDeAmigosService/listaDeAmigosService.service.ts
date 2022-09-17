import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Usuario } from 'src/domain/Usuario/usuario'

@Injectable({
  providedIn: 'root'
})
export class ListaDeAmigosServiceService {

  constructor(public http: HttpClient) { }

   async traerUsuarioPorId(idUsuario:string) {
   return await this.http.get<Usuario>('http://localhost:8080' + '/usuario/' +idUsuario).toPromise()
}

}
