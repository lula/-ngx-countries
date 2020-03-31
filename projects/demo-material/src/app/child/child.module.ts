import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxCountriesModule } from '@ngx-countries/core';
import { NgxCountriesMaterialModule } from '@ngx-countries/material';

import { ChildComponent } from './child.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    NgxCountriesModule,
    NgxCountriesMaterialModule,
    RouterModule.forChild([
      { path: '', component: ChildComponent}
    ])
  ],
  providers: []
})
export class ChildModule {}
