import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceGenerosComponent } from './indice-generos.component';

describe('IndiceGenerosComponent', () => {
  let component: IndiceGenerosComponent;
  let fixture: ComponentFixture<IndiceGenerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiceGenerosComponent]
    });
    fixture = TestBed.createComponent(IndiceGenerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
