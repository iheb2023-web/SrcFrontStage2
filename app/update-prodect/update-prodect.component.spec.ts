import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProdectComponent } from './update-prodect.component';

describe('UpdateProdectComponent', () => {
  let component: UpdateProdectComponent;
  let fixture: ComponentFixture<UpdateProdectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProdectComponent]
    });
    fixture = TestBed.createComponent(UpdateProdectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
