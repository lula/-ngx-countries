import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-material';

  form: FormGroup;

  country: string = "it";

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      country: 'it'
    });

    this.form.get('country').disable();
  }
}
