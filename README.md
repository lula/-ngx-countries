# @ngx-countries

This project is a simple Angular wrapper for [i18n-iso-countries](https://github.com/michaelwittig/node-i18n-iso-countries) and [countries](https://github.com/mledoze/countries) libraries.

It gets locales and translations from `i81n-iso-countries` and additional data (currency, flag, etc) from `countries`.

There are three main modules you can use:

- `@ngx-countries/core`: main module, only uses `i81n-iso-countries`.

- `@ngx-countries/countries`: exports a service that gets country data from `countries` lib.

- `@ngx-countries/material`: exports some `@angular/material` components.

## Installation

`npm install --save @ngx-countries/core i18n-iso-countries`

`countries` lib is already bundled in ngx-countries as it doesn't export countries.json.

If you want to have countries data as well:

`npm install --save @ngx-countries/countries`

If you want to use material components:

Angular Material 8: `npm install --save @ngx-countries/material@8.0.1`
Angular Material 9: `npm install --save @ngx-countries/material@9.0.1`

## Usage

In your root module use `forRoot` method

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgxCountriesModule } from '@ngx-countries/core';
...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCountriesModule.forRoot({
      locales: ['en', 'it']
    }),
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

See [here](https://github.com/michaelwittig/node-i18n-iso-countries#supported-languages-iso-639-1) the supported locales.

You can pass a default locale (default to `en`):

```typescript
NgxCountriesModule.forRoot({
  defaultLocale: 'it',
  locales: ['en', 'it', 'ja']
})
```

If no locales are passed, only default locale is used.

```typescript
NgxCountriesModule.forRoot({
  defaultLocale: 'it'
})
```

If you pass no options in `forRoot` method only `en` is used as locale.

```typescript
NgxCountriesModule.forRoot()
```

In you child modules just import `NgxCountriesModule`.

## Material components

### ngx-countries-autocomplete

Angular Material autocomplete that supports both template and reactive forms.

Basic usage:

```typescript
countryModel: string;

constructor(private fb: FormBuilder, private countriesService: NgxCountriesIsoService) {
  this.form = this.fb.group({
    country: ''
  });
}
```

Reactive form:

```html
<form [formGroup]="form">
  <mat-form-field>
    <mat-label>Country</mat-label>
    <ngx-countries-autocomplete formControlName="country"></ngx-countries-autocomplete>
  </mat-form-field>
  <mat-error *ngIf="form.get('country').invalid">Invalid</mat-error>
  <span>{{form.value | json}}</span>
</form>
```

Template form:

```html
 <form>
  <h3>ngModel</h3>
  <mat-form-field>
    <mat-label>Country</mat-label>
    <ngx-countries-autocomplete name="country" [(ngModel)]="country"></ngx-countries-autocomplete>
  </mat-form-field>
  <span>{{country}}</span>
</form>
```

Available inputs:

- `displayInputValueFn`: function used to display the input value. Default function displays the country name.
- `displayOptionItemFn`: function used to display the option values. Default function displays the country name.

Both have the same interface: `(countryCode: string) => string`

Usage:

```typescript
export class AppComponent {
  myDisplayFn(countryCode: string): string {
    if (countryCode) {
      return this.countriesService.getName(countryCode) + ' - ' + countryCode.toUpperCase();
    }
  }

  constructor(private countriesService: NgxCountriesIsoService, ...) { ... }
}
```

```html
<mat-form-field>
  <mat-label>Country</mat-label>
  <ngx-countries-autocomplete name="country" [(ngModel)]="country" [displayInputValueFn]="myDisplayFn"></ngx-countries-autocomplete>
</mat-form-field>
```

- shouldFilterCountryCode: used to filter option items (country codes). Default function returns the country name that starts with the input value.

Interface: `(countryCode: string, searchText: string) => boolean`

Usage:

```typescript
export class AppComponent {
  constructor(private countriesService: NgxCountriesIsoService, ...) { ... }

  myShouldFilterCountryCode(countryCode: string, searchText: string): boolean {
    return this.countriesService
      .getName(countryCode)
      .toLowerCase()
      .indexOf(searchText.toLowerCase()) >= 0;
  }
}
```

```html
<mat-form-field>
  <mat-label>Country</mat-label>
  <ngx-countries-autocomplete name="country" [(ngModel)]="country" [shouldFilterCountryCode]="myShouldFilterCountryCode"></ngx-countries-autocomplete>
</mat-form-field>
```

- `optionTemplate`: templare ref to display options items. Template have the country code as implicit context parameter.

Usage:

```html
<ngx-countries-autocomplete formControlName="country" [optionTemplate]="optionTemplate"></ngx-countries-autocomplete>
<ng-template #optionTemplate let-code>
  {{myDisplayFn(code)}}
</ng-template>
```

## Example applications

Run `ng build @ngx-countries/core` to build the library (build the other modules as well if you want to run other demo applications `demo-countries-data` or `demo-material`)

When done run `ng serve demo-core` (or `demo-countries-data` or `demo-material`) and go to http://localhost:4200 in your favourite browser once compiled.

## Running unit tests

- `ng test @ngx-countries/core`

- `ng test @ngx-countries/countries`
