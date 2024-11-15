import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProdectComponent } from './details-prodect.component';

describe('DetailsProdectComponent', () => {
  let component: DetailsProdectComponent;
  let fixture: ComponentFixture<DetailsProdectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsProdectComponent]
    });
    fixture = TestBed.createComponent(DetailsProdectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
