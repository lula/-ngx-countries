import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxCountriesDataService } from '@ngx-countries/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-material';

  form: FormGroup;

  country = 'it';

  displayFn: (code: string) => string = code => {
    if (code) {
      return this.countriesService.getName(code) + ' - ' + code.toUpperCase();
    }
  }

  constructor(private fb: FormBuilder, private countriesService: NgxCountriesDataService) {
    this.form = this.fb.group({
      country: ['it', Validators.required]
    });

    // this.form.get('country').disable();
  }
}
