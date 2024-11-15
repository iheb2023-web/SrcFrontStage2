import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdListComponent } from './cmd-list.component';

describe('CmdListComponent', () => {
  let component: CmdListComponent;
  let fixture: ComponentFixture<CmdListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmdListComponent]
    });
    fixture = TestBed.createComponent(CmdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
