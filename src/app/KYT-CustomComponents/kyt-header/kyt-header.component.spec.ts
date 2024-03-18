import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KytHeaderComponent } from './kyt-header.component';

describe('KytHeaderComponent', () => {
  let component: KytHeaderComponent;
  let fixture: ComponentFixture<KytHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KytHeaderComponent]
    });
    fixture = TestBed.createComponent(KytHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
