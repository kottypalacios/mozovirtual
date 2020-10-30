import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MozovirtualComponent } from './mozovirtual.component';

describe('MozovirtualComponent', () => {
  let component: MozovirtualComponent;
  let fixture: ComponentFixture<MozovirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MozovirtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MozovirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
