import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgxCountriesMaterialModule } from '@ngx-countries/material';
import { NgxCountriesModule } from '@ngx-countries/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [AppComponent, RootComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/root', pathMatch: 'full'},
      { path: 'root', component: RootComponent },
      { path: 'child', loadChildren: () => import('./child/child.module').then(mod => mod.ChildModule) }
    ]),
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxCountriesModule.forRoot({
      locales: ['en', 'it']
    }),
    NgxCountriesMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
