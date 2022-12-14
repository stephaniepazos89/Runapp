/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { RutinaComponent } from './rutina.component'

describe('RutinaComponent', () => {
  let component: RutinaComponent
  let fixture: ComponentFixture<RutinaComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutinaComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
