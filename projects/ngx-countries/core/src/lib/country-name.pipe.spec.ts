import { CountryNamePipe } from './country-name.pipe';
import { TestBed } from '@angular/core/testing';
import { NgxCountriesModule } from './ngx-countries.module';
import { NgxCountriesIsoService } from './ngx-countries-iso.service';

describe('CountryNamePipe', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      NgxCountriesModule.forRoot({
        locales: ['en', 'it', 'fr']
      })
    ]
  }));


  it('create an instance', () => {
    const service: NgxCountriesIsoService = TestBed.inject(NgxCountriesIsoService);
    const pipe = new CountryNamePipe(service);
    expect(pipe).toBeTruthy();
  });

  it('return name \'Italia\' for country code \'it\'', () => {
    const service: NgxCountriesIsoService = TestBed.inject(NgxCountriesIsoService);
    const pipe = new CountryNamePipe(service);
    expect(pipe.transform('it', 'it')).toBeTruthy();
  });

  it('return name \'Italy\' for country code \'en\'', () => {
    const service: NgxCountriesIsoService = TestBed.inject(NgxCountriesIsoService);
    const pipe = new CountryNamePipe(service);
    expect(pipe.transform('it', 'en')).toBeTruthy();
  });
});
