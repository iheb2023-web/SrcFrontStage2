import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectAdminComponent } from './connect-admin.component';

describe('ConnectAdminComponent', () => {
  let component: ConnectAdminComponent;
  let fixture: ComponentFixture<ConnectAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectAdminComponent]
    });
    fixture = TestBed.createComponent(ConnectAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
