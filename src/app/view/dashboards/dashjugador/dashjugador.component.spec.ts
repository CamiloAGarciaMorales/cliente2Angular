import { ComponentFixture, TestBed } from '@angular/core/testing';

import {DashjugadorComponent} from './dashjugador.component';

describe('DashjugadorComponent', () => {
  let component: DashjugadorComponent;
  let fixture: ComponentFixture<DashjugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashjugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
