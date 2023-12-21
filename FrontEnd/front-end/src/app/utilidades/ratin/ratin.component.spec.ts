import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatinComponent } from './ratin.component';

describe('RatinComponent', () => {
  let component: RatinComponent;
  let fixture: ComponentFixture<RatinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatinComponent]
    });
    fixture = TestBed.createComponent(RatinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
