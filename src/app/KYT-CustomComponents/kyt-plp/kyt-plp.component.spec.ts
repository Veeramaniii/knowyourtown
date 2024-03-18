import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KytPlpComponent } from './kyt-plp.component';

describe('KytPlpComponent', () => {
  let component: KytPlpComponent;
  let fixture: ComponentFixture<KytPlpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KytPlpComponent]
    });
    fixture = TestBed.createComponent(KytPlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
