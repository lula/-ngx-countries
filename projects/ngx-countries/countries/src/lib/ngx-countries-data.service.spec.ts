import { TestBed } from '@angular/core/testing';

import { NgxCountriesDataService } from './ngx-countries-data.service';
import { NgxCountriesModule } from '@ngx-countries/core';

describe('NgxCountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      NgxCountriesModule.forRoot({
        locales: ['en', 'it', 'fr']
      })
    ],
    providers: [NgxCountriesDataService]
  }));

  it('should be created', () => {
    const service: NgxCountriesDataService = TestBed.get(NgxCountriesDataService);
    expect(service).toBeTruthy();
  });

  it('should return country for country code \'it\'', () => {
    const service: NgxCountriesDataService = TestBed.get(NgxCountriesDataService);
    const country = service.getCountry('it');
    expect(country).toBeTruthy();
  });

  it('should return only localized translations except eng of country code \'it\'', () => {
    const service: NgxCountriesDataService = TestBed.get(NgxCountriesDataService);
    const country = service.getCountry('it');
    expect(Object.keys(country.translations)).toEqual(['fra', 'ita']);
  });

  it('should return currency EUR for country code \'it\'', () => {
    const service: NgxCountriesDataService = TestBed.get(NgxCountriesDataService);
    const country = service.getCountry('it');
    expect(Object.keys(country.currencies)[0]).toEqual('EUR');
  });
});
