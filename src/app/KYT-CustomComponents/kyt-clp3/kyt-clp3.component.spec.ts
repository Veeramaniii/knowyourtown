import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KytClp3Component } from './kyt-clp3.component';

describe('KytClp3Component', () => {
  let component: KytClp3Component;
  let fixture: ComponentFixture<KytClp3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KytClp3Component]
    });
    fixture = TestBed.createComponent(KytClp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
