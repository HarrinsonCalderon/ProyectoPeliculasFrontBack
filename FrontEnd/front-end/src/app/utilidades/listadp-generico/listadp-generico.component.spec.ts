import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadpGenericoComponent } from './listadp-generico.component';

describe('ListadpGenericoComponent', () => {
  let component: ListadpGenericoComponent;
  let fixture: ComponentFixture<ListadpGenericoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadpGenericoComponent]
    });
    fixture = TestBed.createComponent(ListadpGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
