import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeljugadorComponent } from './deljugador.component';

describe('DeljugadorComponent', () => {
  let component: DeljugadorComponent;
  let fixture: ComponentFixture<DeljugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeljugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeljugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
