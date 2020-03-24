import { Component } from '@angular/core';
import { NgxCountriesDataService } from '@ngx-countries/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countryCode: string;
  results: any = {};

  constructor(private countries: NgxCountriesDataService) {}

  getName(code: string, lang: string) {
    return this.countries.getName(code, lang);
  }

  go() {
    this.results = {
      en: this.getName(this.countryCode, 'en'),
      it: this.getName(this.countryCode, 'it'),
      ru: this.getName(this.countryCode, 'ru'),
      ja: this.getName(this.countryCode, 'ja'),
      data: this.countries.getCountry(this.countryCode)
    };
  }

}
