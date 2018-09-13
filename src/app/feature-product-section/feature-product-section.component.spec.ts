import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureProductSectionComponent } from './feature-product-section.component';

describe('FeatureProductSectionComponent', () => {
  let component: FeatureProductSectionComponent;
  let fixture: ComponentFixture<FeatureProductSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureProductSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureProductSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
