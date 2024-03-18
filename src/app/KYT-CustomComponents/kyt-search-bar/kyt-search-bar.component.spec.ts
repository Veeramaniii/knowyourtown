import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KytSearchBarComponent } from './kyt-search-bar.component';

describe('KytSearchBarComponent', () => {
  let component: KytSearchBarComponent;
  let fixture: ComponentFixture<KytSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KytSearchBarComponent]
    });
    fixture = TestBed.createComponent(KytSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
