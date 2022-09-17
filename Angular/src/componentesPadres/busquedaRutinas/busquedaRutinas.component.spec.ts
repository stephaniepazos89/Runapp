/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
//import { By } from '@angular/platform-browser'
//import { DebugElement } from '@angular/core'

import { BusquedaRutinasComponent } from './busquedaRutinas.component'

describe('BusquedaRutinasComponent', () => {
  let component: BusquedaRutinasComponent
  let fixture: ComponentFixture<BusquedaRutinasComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaRutinasComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaRutinasComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
