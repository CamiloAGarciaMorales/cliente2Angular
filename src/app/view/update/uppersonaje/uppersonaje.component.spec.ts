import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppersonajeComponent } from './uppersonaje.component';

describe('UppersonajeComponent', () => {
  let component: UppersonajeComponent;
  let fixture: ComponentFixture<UppersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UppersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
