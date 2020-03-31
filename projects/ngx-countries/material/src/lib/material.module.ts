import { NgModule } from '@angular/core';
import { CountriesAutocompleteComponent } from './countries-autocomplete/countries-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
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
