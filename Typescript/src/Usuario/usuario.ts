export class Usuario{
    
    constructor(public amigos:Usuario[]=[]){}

    agregarAmigo(seguidor1: Usuario) {
        this.amigos.push(seguidor1)
    }
}