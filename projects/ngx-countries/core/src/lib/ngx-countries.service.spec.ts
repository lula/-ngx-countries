import { TestBed } from '@angular/core/testing';

import { NgxCountriesIsoService } from './ngx-countries-iso.service';
import { NgxCountriesModule } from './ngx-countries.module';

describe('NgxCountriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      NgxCountriesModule.forRoot({
        locales: ['en', 'it', 'fr']
      })
    ]
  }));

  it('should be created', () => {
    const service: NgxCountriesIsoService = TestBed.inject(NgxCountriesIsoService);
    expect(service).toBeTruthy();
  });

  it('should be localized for it, fr and en', () => {
    const service: NgxCountriesIsoService = TestBed.inject(NgxCountriesIsoService);
    expect(service.langs()).toEqual(['en', 'it', 'fr']);
  });

  it('should return \'Italy\' for it country code for language en', () => {
    const service: NgxCountriesIsoService = TestBed.inject(NgxCountriesIsoService);
    const name = service.getName('it', 'en');
    expect(name).toBe('Italy');
  });

  it('should return \'Italia\' for country code \'it\' for language it', () => {
    const service: NgxCountriesIsoService = TestBed.inject(NgxCountriesIsoService);
    const name = service.getName('it', 'it');
    expect(name).toBe('Italia');
  });

  it('should return undefined for country code \'it\' for language sp', () => {
    const service: NgxCountriesIsoService = TestBed.inject(NgxCountriesIsoService);
    const name = service.getName('it', 'sp');
    expect(name).toBeUndefined();
  });
});
