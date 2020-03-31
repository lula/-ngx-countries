import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxCountriesIsoService } from './ngx-countries-iso.service';
import { NGX_COUNTRIES_DEFAULT_LOCALE, NGX_COUNTRIES_LOCALES } from './constants';
import * as i18nIsoCountries from 'i18n-iso-countries';

declare function require(module);

export interface NgxCountriesOptions {
  locales?: string[];
  defaultLocale?: string;
}

export function NgxCountriesLocalesFactory(locales: string[], defaultLocale: string) {
  locales = locales || [defaultLocale];

  if (!locales.includes(defaultLocale)) {
    locales.push(defaultLocale);
  }
  
  locales.forEach(locale => {
    i18nIsoCountries.registerLocale(
      require(`i18n-iso-countries/langs/${locale}.json`)
    );
  });

  return new NgxCountriesIsoService(defaultLocale)
}

@NgModule({
  providers: [ NgxCountriesIsoService ]
})
export class NgxCountriesModule {
  static forRoot(options: NgxCountriesOptions = {}): ModuleWithProviders<NgxCountriesModule> {
    return {
      ngModule: NgxCountriesModule,
      providers: [
        {
          provide: NGX_COUNTRIES_DEFAULT_LOCALE,
          useValue: options.defaultLocale || 'en'
        },
        {
          provide: NGX_COUNTRIES_LOCALES,
          useValue: options.locales || (options.defaultLocale ? [options.defaultLocale] : ['en'])
        },
        {
          provide: NgxCountriesIsoService,
          useFactory: NgxCountriesLocalesFactory,
          deps: [NGX_COUNTRIES_LOCALES, NGX_COUNTRIES_DEFAULT_LOCALE]
        }
      ]
    };
  }
}
