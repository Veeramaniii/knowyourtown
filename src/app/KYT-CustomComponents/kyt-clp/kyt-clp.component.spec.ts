import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KytClpComponent } from './kyt-clp.component';

describe('KytClpComponent', () => {
  let component: KytClpComponent;
  let fixture: ComponentFixture<KytClpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KytClpComponent]
    });
    fixture = TestBed.createComponent(KytClpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
