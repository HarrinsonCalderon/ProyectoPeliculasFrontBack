import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCineComponent } from './editar-cine.component';

describe('EditarCineComponent', () => {
  let component: EditarCineComponent;
  let fixture: ComponentFixture<EditarCineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarCineComponent]
    });
    fixture = TestBed.createComponent(EditarCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
