import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Usuario } from 'src/domain/Usuario/usuario'

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    constructor(public http: HttpClient) { }

        loguearUsuario(username: string, password: string) {
        const usuarioEncontrado = this.http.post<Usuario>('http://localhost:8080' + '/login', {username, password}).toPromise()
        console.log(usuarioEncontrado)
        return usuarioEncontrado
    }
}
