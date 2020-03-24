import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesAutocompleteComponent } from './countries-autocomplete.component';

describe('CountriesAutocompleteComponent', () => {
  let component: CountriesAutocompleteComponent;
  let fixture: ComponentFixture<CountriesAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
