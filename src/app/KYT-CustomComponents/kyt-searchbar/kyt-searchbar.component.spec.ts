import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KytSearchbarComponent } from './kyt-searchbar.component';

describe('KytSearchbarComponent', () => {
  let component: KytSearchbarComponent;
  let fixture: ComponentFixture<KytSearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KytSearchbarComponent]
    });
    fixture = TestBed.createComponent(KytSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
