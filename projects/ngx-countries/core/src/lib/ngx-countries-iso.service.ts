import { Inject, Injectable } from '@angular/core';
import * as i18nIsoCountries from 'i18n-iso-countries';

import { NGX_COUNTRIES_DEFAULT_LOCALE } from './constants';

@Injectable()
export class NgxCountriesIsoService {
  constructor(
    @Inject(NGX_COUNTRIES_DEFAULT_LOCALE)
    public readonly defaultLocale: string
  ) {}

  // i18n-iso-countries wrappers
  getName(alpha2orAlpha3orNumeric: string | number, lang?: string): string {
    if (!lang) {
      lang = this.defaultLocale;
    }

    return i18nIsoCountries.getName(alpha2orAlpha3orNumeric, lang);
  }

  getNames(lang?: string): i18nIsoCountries.LocalizedCountryNames {
    if (!lang) {
      lang = this.defaultLocale;
    }
    return i18nIsoCountries.getNames(lang);
  }

  alpha2ToAlpha3(alpha2: string): string {
    return i18nIsoCountries.alpha2ToAlpha3(alpha2);
  }

  alpha3ToAlpha2(alpha3: string): string {
    return i18nIsoCountries.alpha3ToAlpha2(alpha3);
  }

  getAlpha2Code(name: string, lang?: string): string {
    if (!lang) {
      lang = this.defaultLocale;
    }
    return i18nIsoCountries.getAlpha2Code(name, lang);
  }

  getAlpha3Code(name: string, lang?: string): string {
    if (!lang) {
      lang = this.defaultLocale;
    }
    return i18nIsoCountries.getAlpha3Code(name, lang);
  }

  alpha2ToNumeric(alpha2: string): string {
    return i18nIsoCountries.alpha2ToNumeric(alpha2);
  }

  alpha3ToNumeric(alpha3: string): string {
    return i18nIsoCountries.alpha3ToNumeric(alpha3);
  }

  numericToAlpha2(numeric: number | string): string {
    return i18nIsoCountries.numericToAlpha2(numeric);
  }

  numericToAlpha3(numeric: number | string): string {
    return i18nIsoCountries.numericToAlpha3(numeric);
  }

  getAlpha2Codes(): { [alpha2Key: string]: string } {
    return i18nIsoCountries.getAlpha2Codes();
  }

  getAlpha3Codes(): { [alpha3Key: string]: string } {
    return i18nIsoCountries.getAlpha3Codes();
  }

  getNumericCodes(): { [numericKey: string]: string } {
    return i18nIsoCountries.getNumericCodes();
  }

  toAlpha3(alpha2orNumeric: number | string): string {
    return i18nIsoCountries.toAlpha3(alpha2orNumeric);
  }

  toAlpha2(alpha3orNumeric: number | string): string {
    return i18nIsoCountries.toAlpha2(alpha3orNumeric);
  }

  getSimpleAlpha2Code(name: string, lang?: string): string {
    if (!lang) {
      lang = this.defaultLocale;
    }
    return i18nIsoCountries.getSimpleAlpha2Code(name, lang);
  }

  getSimpleAlpha3Code(name: string, lang?: string): string {
    if (!lang) {
      lang = this.defaultLocale;
    }
    return i18nIsoCountries.getSimpleAlpha3Code(name, lang);
  }

  langs(): string[] {
    return i18nIsoCountries.langs();
  }

  isValid(alpha2orAlpha3orNumeric: string | number): boolean {
    return i18nIsoCountries.isValid(alpha2orAlpha3orNumeric);
  }
}
