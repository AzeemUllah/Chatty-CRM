import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyMultiSelectComponent } from './property-multi-select.component';

describe('PropertyMultiSelectComponent', () => {
  let component: PropertyMultiSelectComponent;
  let fixture: ComponentFixture<PropertyMultiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyMultiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
