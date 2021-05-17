import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuoteDetailsComponent } from './quote-details.component';

describe('QuoteDetailsComponent', () => {
  let component: QuoteDetailsComponent;
  let fixture: ComponentFixture<QuoteDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
