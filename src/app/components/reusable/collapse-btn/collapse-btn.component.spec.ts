import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseBtnComponent } from './collapse-btn.component';

describe('CollapseBtnComponent', () => {
  let component: CollapseBtnComponent;
  let fixture: ComponentFixture<CollapseBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CollapseBtnComponent]
    });
    fixture = TestBed.createComponent(CollapseBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
