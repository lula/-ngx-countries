import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxCountriesMaterialModule } from '@ngx-countries/material';
import { NgxCountriesModule } from '@ngx-countries/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
