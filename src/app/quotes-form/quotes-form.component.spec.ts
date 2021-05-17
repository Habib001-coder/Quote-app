import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuotesFormComponent } from './quotes-form.component';

describe('QuotesFormComponent', () => {
  let component: QuotesFormComponent;
  let fixture: ComponentFixture<QuotesFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
