import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KytRegisterComponent } from './kyt-register.component';

describe('KytRegisterComponent', () => {
  let component: KytRegisterComponent;
  let fixture: ComponentFixture<KytRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KytRegisterComponent]
    });
    fixture = TestBed.createComponent(KytRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
