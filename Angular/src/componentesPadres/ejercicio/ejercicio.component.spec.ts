/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
//import { By } from '@angular/platform-browser'
//import { DebugElement } from '@angular/core'

import { EjercicioComponent } from './ejercicio.component'

describe('EjercicioComponent', () => {
  let component: EjercicioComponent
  let fixture: ComponentFixture<EjercicioComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
