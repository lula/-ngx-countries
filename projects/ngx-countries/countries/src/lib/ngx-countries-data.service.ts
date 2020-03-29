import { Injectable } from '@angular/core';
import { NgxCountriesIsoService } from '@ngx-countries/core';

import { COUNTRIES, Country } from './countries';

@Injectable()
export class NgxCountriesDataService {
  constructor(private countriesIsoService: NgxCountriesIsoService) {}

  // countries country data
  getCountry(alpha2orAlpha3orNumeric: string | number): Country {
    const country = COUNTRIES.find(
      c =>
        c.cca2.toLowerCase() ===
        alpha2orAlpha3orNumeric.toString().toLowerCase()
    );

    const langs = this.countriesIsoService.langs().map(lang2 =>
      this.i18nLocaleToCountriesLanguage(lang2)
    );

    country.translations = Object.keys(country.translations)
      .filter((lang: any) => langs.includes(lang))
      .reduce((tx, lang) => {
        tx[lang] = country.translations[lang];
        return tx;
      }, {});

    country.demonyms = Object.keys(country.demonyms)
      .filter((lang: any) => langs.includes(lang))
      .reduce((tx, lang) => {
        tx[lang] = country.demonyms[lang];
        return tx;
      }, {});

    return country;
  }

  private i18nLocaleToCountriesLanguage(lang2: string) {
    switch (lang2) {
      case 'ar':
        return 'ara';
      case 'az':
        return 'aze';
      case 'be':
        return 'bel';
      case 'bg':
        return 'bul';
      case 'bs':
        return 'bos';
      case 'ca':
        return 'spa'; // catalan ...
      case 'cs':
        return 'ces';
      case 'da':
        return 'dan';
      case 'de':
        return 'deu';
      case 'el':
        return 'ell';
      case 'en':
        return 'eng';
      case 'es':
        return 'spa';
      case 'et':
        return 'est';
      case 'fa':
        return 'per';
      case 'fi':
        return 'fin';
      case 'fr':
        return 'fra';
      case 'he':
        return 'heb';
      case 'hr':
        return 'hrv';
      case 'hu':
        return 'hun';
      case 'hy':
        return 'hye';
      case 'id':
        return 'ind';
      case 'it':
        return 'ita';
      case 'ja':
        return 'jpn';
      case 'ka':
        return 'kat';
      case 'kk':
        return 'kaz';
      case 'ko':
        return 'kor';
      case 'ky':
        return 'kir';
      case 'lt':
        return 'lit';
      case 'lv':
        return 'lav';
      case 'mk':
        return 'mkd';
      case 'mn':
        return 'mon';
      case 'ms':
        return 'msa';
      case 'nb':
        return 'nor';
      case 'nl':
        return 'nld';
      case 'nn':
        return 'nor';
      case 'pl':
        return 'pol';
      case 'pt':
        return 'por';
      case 'ro':
        return 'rom';
      case 'ru':
        return 'rus';
      case 'sk':
        return 'slk';
      case 'sl':
        return 'slv';
      case 'sr':
        return 'srp';
      case 'sv':
        return 'swe';
      case 'th':
        return 'tha';
      case 'tr':
        return 'tur';
      case 'uk':
        return 'eng';
      case 'ur':
        return 'urd';
      case 'uz':
        return 'uzb';
      case 'vi':
        return 'vie';
      case 'zh':
        return 'zho';
    }
  }
}
