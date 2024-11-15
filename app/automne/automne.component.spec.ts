import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomneComponent } from './automne.component';

describe('AutomneComponent', () => {
  let component: AutomneComponent;
  let fixture: ComponentFixture<AutomneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomneComponent]
    });
    fixture = TestBed.createComponent(AutomneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
