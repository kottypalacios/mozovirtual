import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicaComponent } from './caracteristica.component';

describe('CaracteristicaComponent', () => {
  let component: CaracteristicaComponent;
  let fixture: ComponentFixture<CaracteristicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
