import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseAccComponent } from './collapse-acc.component';

describe('CollapseComponent', () => {
  let component: CollapseAccComponent;
  let fixture: ComponentFixture<CollapseAccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CollapseAccComponent]
    });
    fixture = TestBed.createComponent(CollapseAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
