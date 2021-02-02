import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanCapacityDevelopmentComponent } from './human-capacity-development.component';

describe('HumanCapacityDevelopmentComponent', () => {
  let component: HumanCapacityDevelopmentComponent;
  let fixture: ComponentFixture<HumanCapacityDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanCapacityDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanCapacityDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
