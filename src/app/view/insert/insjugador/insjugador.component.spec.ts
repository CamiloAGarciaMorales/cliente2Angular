import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsjugadorComponent } from './insjugador.component';

describe('InsjugadorComponent', () => {
  let component: InsjugadorComponent;
  let fixture: ComponentFixture<InsjugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsjugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
