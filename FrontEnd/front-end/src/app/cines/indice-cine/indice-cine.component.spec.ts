import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceCineComponent } from './indice-cine.component';

describe('IndiceCineComponent', () => {
  let component: IndiceCineComponent;
  let fixture: ComponentFixture<IndiceCineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiceCineComponent]
    });
    fixture = TestBed.createComponent(IndiceCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
