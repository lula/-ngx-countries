import {
  Component,
  forwardRef,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnInit,
  OnDestroy,
  Optional,
  Self
} from '@angular/core';
import {
  MatFormFieldControl,
  MatAutocomplete,
  MatAutocompleteSelectedEvent
} from '@angular/material';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
  NgModel
} from '@angular/forms';
import { NgxCountriesIsoService } from '@ngx-countries/core';
import { map, startWith, concatAll, tap } from 'rxjs/operators';
import { Observable, from, of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ngx-countries-autocomplete',
  templateUrl: 'countries-autocomplete.component.html',
  styles: [``],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountriesAutocompleteComponent),
      multi: true
    }
  ]
})
export class CountriesAutocompleteComponent
  implements ControlValueAccessor, OnInit, OnDestroy {
  @ViewChild('autocompleteInput', { static: false })
  autocompleteInput: ElementRef;
  @ViewChild('countriesAutocomplete', { static: false })
  autocomplete: MatAutocomplete;

  @Input() appearance: string;
  @Input() required: boolean;
  @Input() placeholder: string;
  @Input() formControl: FormControl;

  selected: string;
  countryCodes: string[];
  countries$: Observable<string[]>;

  modelValueChanges = new BehaviorSubject('');

  displayItemFn?: (item: any) => string = item => {
    return this.countriesService.getName(item);
  }

  constructor(private countriesService: NgxCountriesIsoService) {
    this.countryCodes = Object.keys(countriesService.getNames());
  }

  ngOnInit() {
    if (this.formControl) {
      this.countries$ = this.formControl.valueChanges.pipe(
        startWith(this.formControl.value),
        map(searchText => {
          return searchText
            ? this.filterCountries(searchText)
            : this.countryCodes.slice();
        })
      );
    } else {
      this.countries$ = this.modelValueChanges.pipe(
        map(searchText =>
          searchText
            ? this.filterCountries(searchText)
            : this.countryCodes.slice()
        )
      );
    }
  }

  ngOnDestroy() {
    this.modelValueChanges.complete();
  }

  displayCountryFn() {
    return this.displayItemFn;
  }

  filterCountries(searchText): string[] {
    return this.countryCodes.filter(
      code =>
        this.displayItemFn(code)
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) === 0
    );
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.keyCode < 37 || event.keyCode > 40) {
      this.modelValueChanges.next(this.autocompleteInput.nativeElement.value);
    }
  }

  onBlur($event: MouseEvent) {
    // console.log("blur", this.selected)
    // if (!this.selected) {
    //   this.writeValue('');
    // }
  }

  autocompleteSelected(event: MatAutocompleteSelectedEvent) {
    this.selected = event.option.value;
    this.writeValue(event.option.value);
  }

  writeValue(val: string): void {
    // if (!val) {
    //   return;
    // }
    
    if (!this.formControl) {
      this.modelValueChanges.next(val);
    }

    if (this.autocompleteInput) {
      this.autocompleteInput.nativeElement.value = this.displayItemFn(val) || '';
    }

    this.onChange(val);
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
