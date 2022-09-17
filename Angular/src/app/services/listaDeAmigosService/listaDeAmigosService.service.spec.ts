/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing'
import { ListaDeAmigosServiceService } from './listaDeAmigosService.service'

describe('Service: ListaDeAmigosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaDeAmigosServiceService]
    })
  })

  it('should ...', inject([ListaDeAmigosServiceService], (service: ListaDeAmigosServiceService) => {
    expect(service).toBeTruthy()
  }))
})
