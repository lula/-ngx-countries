import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatFormFieldModule } from '@angular/material';
import { NgxCountriesMaterialModule } from '@ngx-countries/material';
import { NgxCountriesModule } from '@ngx-countries/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxCountriesDataService } from '@ngx-countries/countries';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    NgxCountriesModule.forRoot(),
    NgxCountriesMaterialModule
  ],
  providers: [NgxCountriesDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
