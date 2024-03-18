import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KytClp2Component } from './kyt-clp2.component';

describe('KytClp2Component', () => {
  let component: KytClp2Component;
  let fixture: ComponentFixture<KytClp2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KytClp2Component]
    });
    fixture = TestBed.createComponent(KytClp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
