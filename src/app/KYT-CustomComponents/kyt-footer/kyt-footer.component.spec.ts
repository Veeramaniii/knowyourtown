import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KytFooterComponent } from './kyt-footer.component';

describe('KytFooterComponent', () => {
  let component: KytFooterComponent;
  let fixture: ComponentFixture<KytFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KytFooterComponent]
    });
    fixture = TestBed.createComponent(KytFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
