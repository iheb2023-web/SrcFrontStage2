import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProdectComponent } from './insert-prodect.component';

describe('InsertProdectComponent', () => {
  let component: InsertProdectComponent;
  let fixture: ComponentFixture<InsertProdectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertProdectComponent]
    });
    fixture = TestBed.createComponent(InsertProdectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
