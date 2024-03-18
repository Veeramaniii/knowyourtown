import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KytLoginComponent } from './kyt-login.component';

describe('KytLoginComponent', () => {
  let component: KytLoginComponent;
  let fixture: ComponentFixture<KytLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KytLoginComponent]
    });
    fixture = TestBed.createComponent(KytLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
