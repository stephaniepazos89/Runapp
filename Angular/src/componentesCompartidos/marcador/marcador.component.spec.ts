/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MarcadorComponent } from './marcador.component';

describe('MarcadorComponent', () => {
  let component: MarcadorComponent;
  let fixture: ComponentFixture<MarcadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
