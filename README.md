# ngx-countries

This project is a simple Angular wrapper for [i18n-iso-countries](https://github.com/michaelwittig/node-i18n-iso-countries) and [countries](https://github.com/mledoze/countries) libraries.

It gets locales and translations from `i81n-iso-countries` and additional data (currency, flag, etc) from `countries`.

There are three main modules you can use:

- `@ngx-countries/core`: main module, only uses `i81n-iso-countries`.

- `@ngx-countries/countries`: exports a service that gets country data from `countries` lib.

- `@ngx-countries/material`: exports some `@angular/material` components.

## Installation

`npm install --save @ngx-countries/core i18n-iso-countries'

'countries' lib is already bundled in ngx-countries as it doesn't export countries.json.

If you want to have countries data as well:

`npm install --save @ngx-countries/countries'

If you want to use material components:

`npm install --save @ngx-countries/material'

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

Supported locales: see [here](https://github.com/michaelwittig/node-i18n-iso-countries#supported-languages-iso-639-1).

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

## Example application

Run `ng build @ngx-countries/core` to build the library (build other modules as well if you want to use them)

When done run `ng serve demo-core` (or `demo-countries-data` or `demo-material`) and go to http://localhost:4200 in your favourite browser once compiled.

## Running unit tests

- `ng test @ngx-countries/core`

- `ng test @ngx-countries/countries`
