import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyHubComponent } from './technology-hub.component';

describe('TechnologyHubComponent', () => {
  let component: TechnologyHubComponent;
  let fixture: ComponentFixture<TechnologyHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
