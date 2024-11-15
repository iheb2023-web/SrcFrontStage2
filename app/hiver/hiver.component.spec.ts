import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiverComponent } from './hiver.component';

describe('HiverComponent', () => {
  let component: HiverComponent;
  let fixture: ComponentFixture<HiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiverComponent]
    });
    fixture = TestBed.createComponent(HiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
