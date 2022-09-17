import { GruposMusculares } from "../Grupos Musculares/gruposMusculares"

export class Actividad{

    constructor(public gruposMuscularesQueEntrena:Set<string>=new Set(),public nombre:string){}

    agregarGrupoMuscular(unGrupoMuscular:GruposMusculares):void{
        this.gruposMuscularesQueEntrena.add(unGrupoMuscular)
    }
}

const gruposMuscularesPiernas:Set<string> = new Set()
gruposMuscularesPiernas.add(GruposMusculares.piernas)
gruposMuscularesPiernas.add(GruposMusculares.gluteos)
const gruposMuscularesAbdominales:Set<string> = new Set()
gruposMuscularesAbdominales.add(GruposMusculares.abdomen)
const gruposMuscularesGluteos:Set<string> = new Set()
gruposMuscularesGluteos.add(GruposMusculares.gluteos)

export const ABDOMINALES = new Actividad(gruposMuscularesAbdominales,'Abdominales')
export const PIERNAS = new Actividad(gruposMuscularesPiernas,'Piernas')
export const GLUTEOS = new Actividad(gruposMuscularesGluteos,'Gluteos')

export const ACTIVIDADES = [ABDOMINALES,PIERNAS,GLUTEOS]