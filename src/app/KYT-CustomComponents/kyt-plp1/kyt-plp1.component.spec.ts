import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KytPlp1Component } from './kyt-plp1.component';

describe('KytPlp1Component', () => {
  let component: KytPlp1Component;
  let fixture: ComponentFixture<KytPlp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KytPlp1Component]
    });
    fixture = TestBed.createComponent(KytPlp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
