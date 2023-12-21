import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceActoresComponent } from './indice-actores.component';

describe('IndiceActoresComponent', () => {
  let component: IndiceActoresComponent;
  let fixture: ComponentFixture<IndiceActoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiceActoresComponent]
    });
    fixture = TestBed.createComponent(IndiceActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
