import { Pipe, PipeTransform } from '@angular/core';
import { NgxCountriesIsoService } from './ngx-countries-iso.service';

@Pipe({
  name: 'countryName'
})
export class CountryNamePipe implements PipeTransform {
  constructor(private countries: NgxCountriesIsoService) {}

  transform(value: string, lang: string): string {
    return this.countries.getName(value, lang);
  }

}
