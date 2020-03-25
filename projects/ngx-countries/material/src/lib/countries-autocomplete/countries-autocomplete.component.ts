import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  Self,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
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
export class CountriesAutocompleteComponent
  implements
    MatFormFieldControl<string>,
    ControlValueAccessor,
    OnInit,
    OnDestroy {
  static nextId = 0;

  @ViewChild('autocompleteInput', { static: true }) elementRef;
  selected: string;

  @Input()
  get value(): string | null {
    return this.empty ? null : this.selected;
  }
  set value(val: string | null) {
    this.selected = val;
    this.writeValue(val);
    this.stateChanges.next();
  }

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
    return !this.elementRef.nativeElement.value;
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
    return this.elementRef.nativeElement.disabled;
  }
  set disabled(dis: boolean) {
    setTimeout(() => {
      this.setDisabledState(coerceBooleanProperty(dis));
      this.stateChanges.next();
    }, 0);
  }

  @Input()
  get errorState() {
    return this.ngControl.errors !== null && this.ngControl.touched;
  }

  @HostBinding('attr.aria-describedby') describedBy = '';
  controlType = 'ngx-countries-autocomplete';
  autofilled?: boolean;

  countryCodes = [];
  countries$: Observable<string[]>;
  modelValueChanges = new Subject<string>();

  displayItemFn: (item: any) => string = item => {
    return this.countriesService.getName(item);
    // tslint:disable-next-line: semicolon
  };

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private fm: FocusMonitor,
    private renderer: Renderer2,
    private countriesService: NgxCountriesIsoService
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
    this.countryCodes = Object.keys(this.countriesService.getNames());
    this.countries$ = this.modelValueChanges.pipe(
      map(searchText =>
        searchText
          ? this.filterCountries(searchText)
          : this.countryCodes.slice()
      )
    );
  }

  ngOnInit() {
    this.fm.monitor(this.elementRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elementRef.nativeElement);
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    if (event.key.length === 1 || event.key === 'Backspace') {
      this.modelValueChanges.next(this.elementRef.nativeElement.value);
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
    if (
      (event.target as Element).tagName.toLowerCase() !== 'input' &&
      !this.disabled
    ) {
      this.elementRef.nativeElement.focus();
      this.focused = true;
    }
  }

  filterCountries(searchText): string[] {
    return this.countryCodes.filter(
      code =>
        this.displayItemFn(code)
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) === 0
    );
  }

  displayCountryFn() {
    return this.displayItemFn;
  }

  autocompleteSelected(event) {
    this.value = event.option.value;
    this.onChange(this.value);
  }

  writeValue(val: string): void {
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'value',
      this.displayItemFn(val)
    );
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
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'disabled',
      isDisabled
    );
  }
}
