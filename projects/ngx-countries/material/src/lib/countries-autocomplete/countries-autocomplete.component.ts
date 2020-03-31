import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  Optional,
  Renderer2,
  Self,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl, MatInput } from '@angular/material';
import { NgxCountriesIsoService } from '@ngx-countries/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

// tslint:disable: variable-name

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-countries-autocomplete',
  templateUrl: 'countries-autocomplete.component.html',
  styles: [
    `
      span {
        opacity: 0;
        transition: opacity 200ms;
      }
      :host.floating span {
        opacity: 1;
      }
    `
  ],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: forwardRef(() => CountriesAutocompleteComponent)
    }
  ]
})
export class CountriesAutocompleteComponent implements MatFormFieldControl<string>, ControlValueAccessor, OnDestroy {
  static nextId = 0;
  @ViewChild(MatInput, { static: true }) matInput: MatInput;

  @Input()
  get value(): string | null {
    return this.empty ? null : this._value;
  }
  set value(val: string | null) {
    this._value = val;
    this.writeValue(val);
    this.stateChanges.next();
  }
  private _value: string;

  stateChanges = new Subject<void>();

  @HostBinding()
  id = `ngx-countries-autocomplete-${CountriesAutocompleteComponent.nextId++}`;

  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }
  private _placeholder: string;

  get empty() {
    return !this.matInput.value;
  }

  focused: boolean;

  @HostBinding('class.floating')
  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  @Input()
  get required() {
    return this._required;
  }
  set required(req: boolean) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  private _required = false;

  @HostBinding('class.disabled')
  get isDisabled() {
    return this.disabled;
  }

  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(dis: boolean) {
    this._disabled = coerceBooleanProperty(dis);
    this.setDisabledState(this._disabled);
    this.stateChanges.next();
  }
  private _disabled: boolean;

  get errorState(): boolean {
    return this.ngControl.errors !== null && !!this.ngControl.touched;
  }

  @HostBinding('attr.aria-describedby') describedBy = '';
  controlType = 'ngx-countries-autocomplete';

  autofilled?: boolean;

  countryCodes = [];
  countries$: Observable<string[]>;
  modelValueChanges = new Subject<string>();

  /**
   * Template for select options
   */
  @Input()
  optionTemplate?: TemplateRef<any>;

  /**
   * Option item display function
   */
  @Input()
  displayOptionItemFn: (countryCode: string) => string = (countryCode) => {
    if (countryCode) {
      return this.countriesService.getName(countryCode);
    }
    // tslint:disable-next-line: semicolon
  };

  /**
   * Input value display function
   */
  @Input()
  displayInputValueFn: (countryCode: string) => string = (countryCode) => {
    if (countryCode) {
      return this.countriesService.getName(countryCode);
    }
    // tslint:disable-next-line: semicolon
  };

  @Input()
  shouldFilterCountryCode: (countryCode: string, searchText: string) => boolean = (countryCode: string, searchText: string): boolean => {
    return this.countriesService
      .getName(countryCode)
      .toLowerCase()
      .indexOf(searchText.toLowerCase()) === 0;
  }

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private elementRef: ElementRef<HTMLElement>,
    private fm: FocusMonitor,
    private renderer: Renderer2,
    private countriesService: NgxCountriesIsoService
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.fm.monitor(this.elementRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });

    this.countryCodes = Object.keys(this.countriesService.getNames());
    this.countries$ = this.modelValueChanges.pipe(
      map(searchText => (searchText ? this.filterCountries(searchText) : this.countryCodes.slice()))
    );
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elementRef.nativeElement);
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (event.key.length === 1 || event.key === 'Backspace') {
      this.modelValueChanges.next(this.matInput.value);
      this.onChange();
    }
  }

  @HostListener('focusout')
  blur() {
    this.focused = false;
    this.onTouched();
  }

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() !== 'input' && !this.disabled) {
      this.elementRef.nativeElement.focus();
      this.focused = true;
    }
  }

  displayCountryFn() {
    return this.displayInputValueFn;
  }

  autocompleteSelected(event) {
    this.value = event.option.value;
    this.onChange(this.value);
  }

  writeValue(val: string): void {
    const value = this.displayInputValueFn(val) || '';
    setTimeout(() => {
      this.matInput.value = value;
    }, 0);
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._disabled = isDisabled;
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    this.matInput.disabled = isDisabled;
  }

  filterCountries(searchText: string): string[] {
    return this.countryCodes.filter(code => this.shouldFilterCountryCode(code, searchText));
  }
}
