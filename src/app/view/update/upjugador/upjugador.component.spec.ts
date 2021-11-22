import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpjugadorComponent } from './upjugador.component';

describe('UpjugadorComponent', () => {
  let component: UpjugadorComponent;
  let fixture: ComponentFixture<UpjugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpjugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
