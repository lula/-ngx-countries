import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxCountriesIsoService } from '@ngx-countries/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  form: FormGroup;
  country: string;

  myDisplayFn(code: string): string {
    if (code) {
      return this.countriesService.getName(code) + ' - ' + code.toUpperCase();
    }
  }

  constructor(private fb: FormBuilder, private countriesService: NgxCountriesIsoService) {
    this.form = this.fb.group({
      country: ['', Validators.required]
    });

    // this.form.get('country').disable();
  }

  myShouldFilterCountryCode(countryCode: string, searchText: string): boolean {
    return this.countriesService
      .getName(countryCode)
      .toLowerCase()
      .indexOf(searchText.toLowerCase()) >= 0;
  }

}
