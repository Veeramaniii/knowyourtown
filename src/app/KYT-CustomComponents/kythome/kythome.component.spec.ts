import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KythomeComponent } from './kythome.component';

describe('KythomeComponent', () => {
  let component: KythomeComponent;
  let fixture: ComponentFixture<KythomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KythomeComponent]
    });
    fixture = TestBed.createComponent(KythomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
