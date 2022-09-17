import { Amistoso, CriterioDeEdicion, Free, Social } from "../CriterioDeEdicion/criterioDeEdicion"
import { EjercicioCompuesto, EjercicioSimple } from "../Ejercicios/ejercicio"
import { Usuario } from "../Usuario/usuario"
import { Actividad } from "../Actividad/actividad";
import { GruposMusculares } from "../Grupos Musculares/gruposMusculares";
import { Rutina } from "./rutina"
describe('Dada una Rutina', () => {
  const fcBase: number = 90;
  const minDescanso: number = 10;
  const minTrabajo: number = 10;
  const series: number = 3;
  const creador = new Usuario()
  const criterioAmistoso = new Amistoso()
  const criterioSocial = new Social()
  const criterioFree = new Free()
  const seguidor1 = new Usuario()
  const seguidor2 = new Usuario()
  const unaActividad = new Actividad(new Set([GruposMusculares.piernas, GruposMusculares.abdomen, GruposMusculares.pecho]));
  const ejercicioSimple1 = new EjercicioSimple(minTrabajo, fcBase, minDescanso, unaActividad);
  const ejercicioSimple2 = new EjercicioSimple(minTrabajo + 10, fcBase + 10, minDescanso + 10, unaActividad);
  const ejercicioCompuesto1 = new EjercicioCompuesto(series, fcBase, minDescanso, unaActividad);
  const ejercicioCompuesto2 = new EjercicioCompuesto(series - 1, fcBase + 10, minDescanso + 10, unaActividad);
  const unaRutina = new Rutina([ejercicioSimple1, ejercicioSimple2, ejercicioCompuesto1, ejercicioCompuesto2], creador, criterioFree, [seguidor1])
  
  test('se puede obtener su duracion', () => {
    expect(unaRutina.duracion()).toBe(200);
  })

  test('se puede obtener la frecuencia cardiaca base', () => {
    expect(unaRutina.frecuenciaCardiacaBase()).toBe(95);
  })

  test('si no tiene ejercicios, arrojara un error al obtener la frecuencia cardiaca', () => {
    const unaRutinaSinEjercicios = new Rutina([], creador, criterioFree, [seguidor1]);

    expect(() => unaRutinaSinEjercicios.frecuenciaCardiacaBase()).toThrowError();
  })


  test('tiene grupos musculares asociados a ella', () => {
    expect(unaRutina.gruposMuscularesQueEntrena()).toStrictEqual(new Set([GruposMusculares.piernas, GruposMusculares.abdomen, GruposMusculares.pecho]));
  })

  test('la cantidad de grupos musculares que entrena es correcta', () => {
    expect(unaRutina.gruposMuscularesQueEntrena().size).toBe(3);
})


  describe('se puede editar si', () => {
  const unaRutinaFree = new Rutina([ejercicioSimple1, ejercicioSimple2, ejercicioCompuesto1, ejercicioCompuesto2], creador, criterioFree, [seguidor1])
  const unaRutinaAmistosa = new Rutina([ejercicioSimple1, ejercicioSimple2, ejercicioCompuesto1, ejercicioCompuesto2], creador, criterioAmistoso, [seguidor1])
  const unaRutinaSocial = new Rutina([ejercicioSimple1, ejercicioSimple2, ejercicioCompuesto1, ejercicioCompuesto2], creador, criterioSocial, [seguidor2])
  const noEsAmigo = new Usuario()
  const amigo = new Usuario([creador])


    test('es Free cuando no es seguidor', () => {
      expect(unaRutinaFree.esEditable(seguidor2)).toBe(true);
    })

    test('es Free cuando es un seguidor', () => {
      expect(unaRutinaFree.esEditable(seguidor1)).toBe(true);
    })

    test('si es el creador', () => {
      expect(unaRutinaAmistosa.esEditable(creador)).toBe(true)
    })

    test('si es Amistoso, cuando es amigo del creador', () => {
      creador.agregarAmigo(amigo)
      expect(unaRutinaAmistosa.esEditable(amigo)).toBe(true)
    })

    test('si es Amistoso, no se puede editar cuando no son amigos', () => {
      expect(unaRutinaAmistosa.esEditable(noEsAmigo)).toBe(false)
    })

    test('si es Social,un usuario seguidor puede editarla', () => {
      expect(unaRutinaSocial.esEditable(seguidor2)).toBe(true)
    })

    test('si es Social,un usuario no seguidor no puede editarla', () => {
      expect(unaRutinaSocial.esEditable(seguidor1)).toBe(false)
    })

  })

})
