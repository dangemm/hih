import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipsJobPlacementsComponent } from './internships-job-placements.component';

describe('InternshipsJobPlacementsComponent', () => {
  let component: InternshipsJobPlacementsComponent;
  let fixture: ComponentFixture<InternshipsJobPlacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternshipsJobPlacementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipsJobPlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
