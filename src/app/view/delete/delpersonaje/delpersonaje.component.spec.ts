import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpersonajeComponent } from './delpersonaje.component';

describe('DelpersonajeComponent', () => {
  let component: DelpersonajeComponent;
  let fixture: ComponentFixture<DelpersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelpersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelpersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
