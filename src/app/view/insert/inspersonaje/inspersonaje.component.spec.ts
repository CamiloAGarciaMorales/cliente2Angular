import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspersonajeComponent } from './inspersonaje.component';

describe('InspersonajeComponent', () => {
  let component: InspersonajeComponent;
  let fixture: ComponentFixture<InspersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
