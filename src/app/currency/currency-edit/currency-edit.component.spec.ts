import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyEditComponent } from './currency-edit.component';

describe('CurrencyEditComponent', () => {
  let component: CurrencyEditComponent;
  let fixture: ComponentFixture<CurrencyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
