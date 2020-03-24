import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxCountriesModule } from '@ngx-countries/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxCountriesModule.forRoot({
      locales: ['en', 'it', 'ru', 'ja']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
