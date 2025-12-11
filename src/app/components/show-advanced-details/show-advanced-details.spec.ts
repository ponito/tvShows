import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAdvancedDetails } from './show-advanced-details';

describe('ShowAdvancedDetails', () => {
  let component: ShowAdvancedDetails;
  let fixture: ComponentFixture<ShowAdvancedDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAdvancedDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAdvancedDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
