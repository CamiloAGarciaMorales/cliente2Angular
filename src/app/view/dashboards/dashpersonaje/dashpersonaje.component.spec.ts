import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashpersonajeComponent } from './dashpersonaje.component';

describe('DashpersonajeComponent', () => {
  let component: DashpersonajeComponent;
  let fixture: ComponentFixture<DashpersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashpersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashpersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
