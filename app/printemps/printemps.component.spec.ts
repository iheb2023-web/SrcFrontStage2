import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintempsComponent } from './printemps.component';

describe('PrintempsComponent', () => {
  let component: PrintempsComponent;
  let fixture: ComponentFixture<PrintempsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintempsComponent]
    });
    fixture = TestBed.createComponent(PrintempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
