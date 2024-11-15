import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeteComponent } from './hete.component';

describe('HeteComponent', () => {
  let component: HeteComponent;
  let fixture: ComponentFixture<HeteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeteComponent]
    });
    fixture = TestBed.createComponent(HeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
