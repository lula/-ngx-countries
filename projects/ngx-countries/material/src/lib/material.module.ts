import { NgModule } from '@angular/core';
import { CountriesAutocompleteComponent } from './countries-autocomplete/countries-autocomplete.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatSelectModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCountriesModule } from '@ngx-countries/core';

@NgModule({
  declarations: [CountriesAutocompleteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    NgxCountriesModule
  ],
  exports: [CountriesAutocompleteComponent]
})
export class NgxCountriesMaterialModule {}
