import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductSectionComponent } from './new-product-section.component';

describe('NewProductSectionComponent', () => {
  let component: NewProductSectionComponent;
  let fixture: ComponentFixture<NewProductSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
