import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioIngresarComponent } from './usuario-ingresar.component';

describe('UsuarioIngresarComponent', () => {
  let component: UsuarioIngresarComponent;
  let fixture: ComponentFixture<UsuarioIngresarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioIngresarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioIngresarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
