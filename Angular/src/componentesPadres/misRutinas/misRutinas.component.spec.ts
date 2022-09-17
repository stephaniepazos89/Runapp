/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MisRutinasComponent } from './misRutinas.component'

describe('MisRutinasComponent', () => {
  let component: MisRutinasComponent
  let fixture: ComponentFixture<MisRutinasComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisRutinasComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MisRutinasComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
