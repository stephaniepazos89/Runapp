import { Actividad } from "../Actividad/actividad";
import { GruposMusculares } from "../Grupos Musculares/gruposMusculares";
import { EjercicioCompuesto, EjercicioSimple } from "./ejercicio"

describe('Dado un ejercicio', () => {

    const frecuenciaCardiacaBase:number = 90;
    const unaActividad=new Actividad(new Set([GruposMusculares.piernas,GruposMusculares.abdomen,GruposMusculares.pecho]));
    let minutosDeDescanso:number = 10;
    const actividadSinGrupoMuscular=new Actividad();

    describe('si es simple', () => {
        let ejercicioSimple:EjercicioSimple
        let minutosDeTrabajo:number = 20;
        
        beforeAll(()=>{
            ejercicioSimple=new EjercicioSimple(minutosDeTrabajo,frecuenciaCardiacaBase,minutosDeDescanso,unaActividad)
        })
        
        test('se puede obtener su duracion', () => {
            expect(ejercicioSimple.duracion()).toBe(30);
        })

        test('se puede obtener los grupos musculares que entrena', () => {
            expect(ejercicioSimple.gruposMuscularesQueEntrena()).toStrictEqual(new Set([GruposMusculares.piernas,GruposMusculares.abdomen,GruposMusculares.pecho]));
        })

        test('si la actividad no entrena ningun grupo muscular, devuelve una lista vacia', () => {
            const ejercicioSimpleSinGrupoMuscular=new EjercicioSimple(minutosDeTrabajo,frecuenciaCardiacaBase,minutosDeDescanso,actividadSinGrupoMuscular);

            expect(ejercicioSimpleSinGrupoMuscular.gruposMuscularesQueEntrena()).toStrictEqual(new Set());
        })
    })
    describe('si es compuesto', () => {
      let ejercicioCompuesto:EjercicioCompuesto
      let serie:number = 3;

        beforeAll(()=>{
            ejercicioCompuesto=new EjercicioCompuesto(serie,frecuenciaCardiacaBase,minutosDeDescanso,unaActividad)
        })

        test('se puede obtener su duracion', () => {
            expect(ejercicioCompuesto.duracion()).toBe(60);
        })

        test('se puede obtener los grupos musculares que entrena', () => {
            expect(ejercicioCompuesto.gruposMuscularesQueEntrena()).toStrictEqual(new Set([GruposMusculares.piernas,GruposMusculares.abdomen,GruposMusculares.pecho]));
        })

        test('si la actividad no entrena ningun grupo muscular, devuelve una lista vacia', () => {
            const ejercicioCompuestoSinGrupoMuscular=new EjercicioCompuesto(serie,frecuenciaCardiacaBase,minutosDeDescanso,actividadSinGrupoMuscular);

            expect(ejercicioCompuestoSinGrupoMuscular.gruposMuscularesQueEntrena()).toStrictEqual(new Set());
        })
    })
  })