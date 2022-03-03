import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteModalComponent } from './estudiante-modal.component';

describe('EstudianteModalComponent', () => {
  let component: EstudianteModalComponent;
  let fixture: ComponentFixture<EstudianteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudianteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
