import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFeatureComponent } from './body-feature.component';

describe('BodyFeatureComponent', () => {
  let component: BodyFeatureComponent;
  let fixture: ComponentFixture<BodyFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
