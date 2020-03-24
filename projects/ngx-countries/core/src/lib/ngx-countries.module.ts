import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxCountriesIsoService } from './ngx-countries-iso.service';
import { NGX_COUNTRIES_DEFAULT_LOCALE, NGX_COUNTRIES_LOCALES } from './constants';
import * as i18nIsoCountries from 'i18n-iso-countries';

declare function require(module);

export interface NgxCountriesOptions {
  locales?: string[];
  defaultLocale?: string;
}

@NgModule({
  providers: [ NgxCountriesIsoService ]
})
export class NgxCountriesModule {
  static forRoot(options: NgxCountriesOptions = {}): ModuleWithProviders {
    options.defaultLocale = options.defaultLocale || 'en';
    options.locales = options.locales || [options.defaultLocale];

    if (!options.locales.includes(options.defaultLocale)) {
      options.locales.push(options.defaultLocale);
    }

    options.locales.forEach(locale => {
      i18nIsoCountries.registerLocale(
        require(`i18n-iso-countries/langs/${locale}.json`)
      );
    });

    return {
      ngModule: NgxCountriesModule,
      providers: [
        NgxCountriesIsoService,
        {
          provide: NGX_COUNTRIES_DEFAULT_LOCALE,
          useValue: options.defaultLocale
        },
        {
          provide: NGX_COUNTRIES_LOCALES,
          useValue: options.locales
        }
      ]
    };
  }
}
