import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreFormComponent } from './registre-form.component';

describe('RegistreFormComponent', () => {
  let component: RegistreFormComponent;
  let fixture: ComponentFixture<RegistreFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistreFormComponent]
    });
    fixture = TestBed.createComponent(RegistreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
