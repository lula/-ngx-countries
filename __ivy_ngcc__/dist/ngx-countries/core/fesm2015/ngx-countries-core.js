import { Injectable, Inject, NgModule } from '@angular/core';
import { getName, getNames, alpha2ToAlpha3, alpha3ToAlpha2, getAlpha2Code, getAlpha3Code, alpha2ToNumeric, alpha3ToNumeric, numericToAlpha2, numericToAlpha3, getAlpha2Codes, getAlpha3Codes, getNumericCodes, toAlpha3, toAlpha2, getSimpleAlpha2Code, getSimpleAlpha3Code, langs, isValid, registerLocale } from 'i18n-iso-countries';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/constants.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
const NGX_COUNTRIES_DEFAULT_LOCALE = 'NGX_I18N_COUNTRIES_DEFAULT_LOCALE';
/** @type {?} */
const NGX_COUNTRIES_LOCALES = 'NGX_I18N_COUNTRIES_LOCALES';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-countries-iso.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxCountriesIsoService {
    /**
     * @param {?} defaultLocale
     */
    constructor(defaultLocale) {
        this.defaultLocale = defaultLocale;
    }
    // i18n-iso-countries wrappers
    /**
     * @param {?} alpha2orAlpha3orNumeric
     * @param {?=} lang
     * @return {?}
     */
    getName(alpha2orAlpha3orNumeric, lang) {
        if (!lang) {
            lang = this.defaultLocale;
        }
        return getName(alpha2orAlpha3orNumeric, lang);
    }
    /**
     * @param {?=} lang
     * @return {?}
     */
    getNames(lang) {
        if (!lang) {
            lang = this.defaultLocale;
        }
        return getNames(lang);
    }
    /**
     * @param {?} alpha2
     * @return {?}
     */
    alpha2ToAlpha3(alpha2) {
        return alpha2ToAlpha3(alpha2);
    }
    /**
     * @param {?} alpha3
     * @return {?}
     */
    alpha3ToAlpha2(alpha3) {
        return alpha3ToAlpha2(alpha3);
    }
    /**
     * @param {?} name
     * @param {?=} lang
     * @return {?}
     */
    getAlpha2Code(name, lang) {
        if (!lang) {
            lang = this.defaultLocale;
        }
        return getAlpha2Code(name, lang);
    }
    /**
     * @param {?} name
     * @param {?=} lang
     * @return {?}
     */
    getAlpha3Code(name, lang) {
        if (!lang) {
            lang = this.defaultLocale;
        }
        return getAlpha3Code(name, lang);
    }
    /**
     * @param {?} alpha2
     * @return {?}
     */
    alpha2ToNumeric(alpha2) {
        return alpha2ToNumeric(alpha2);
    }
    /**
     * @param {?} alpha3
     * @return {?}
     */
    alpha3ToNumeric(alpha3) {
        return alpha3ToNumeric(alpha3);
    }
    /**
     * @param {?} numeric
     * @return {?}
     */
    numericToAlpha2(numeric) {
        return numericToAlpha2(numeric);
    }
    /**
     * @param {?} numeric
     * @return {?}
     */
    numericToAlpha3(numeric) {
        return numericToAlpha3(numeric);
    }
    /**
     * @return {?}
     */
    getAlpha2Codes() {
        return getAlpha2Codes();
    }
    /**
     * @return {?}
     */
    getAlpha3Codes() {
        return getAlpha3Codes();
    }
    /**
     * @return {?}
     */
    getNumericCodes() {
        return getNumericCodes();
    }
    /**
     * @param {?} alpha2orNumeric
     * @return {?}
     */
    toAlpha3(alpha2orNumeric) {
        return toAlpha3(alpha2orNumeric);
    }
    /**
     * @param {?} alpha3orNumeric
     * @return {?}
     */
    toAlpha2(alpha3orNumeric) {
        return toAlpha2(alpha3orNumeric);
    }
    /**
     * @param {?} name
     * @param {?=} lang
     * @return {?}
     */
    getSimpleAlpha2Code(name, lang) {
        if (!lang) {
            lang = this.defaultLocale;
        }
        return getSimpleAlpha2Code(name, lang);
    }
    /**
     * @param {?} name
     * @param {?=} lang
     * @return {?}
     */
    getSimpleAlpha3Code(name, lang) {
        if (!lang) {
            lang = this.defaultLocale;
        }
        return getSimpleAlpha3Code(name, lang);
    }
    /**
     * @return {?}
     */
    langs() {
        return langs();
    }
    /**
     * @param {?} alpha2orAlpha3orNumeric
     * @return {?}
     */
    isValid(alpha2orAlpha3orNumeric) {
        return isValid(alpha2orAlpha3orNumeric);
    }
}
NgxCountriesIsoService.ɵfac = function NgxCountriesIsoService_Factory(t) { return new (t || NgxCountriesIsoService)(ɵngcc0.ɵɵinject(NGX_COUNTRIES_DEFAULT_LOCALE)); };
NgxCountriesIsoService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: NgxCountriesIsoService, factory: NgxCountriesIsoService.ɵfac });
/** @nocollapse */
NgxCountriesIsoService.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [NGX_COUNTRIES_DEFAULT_LOCALE,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxCountriesIsoService, [{
        type: Injectable
    }], function () { return [{ type: String, decorators: [{
                type: Inject,
                args: [NGX_COUNTRIES_DEFAULT_LOCALE]
            }] }]; }, null); })();
if (false) {
    /** @type {?} */
    NgxCountriesIsoService.prototype.defaultLocale;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-countries.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgxCountriesOptions() { }
if (false) {
    /** @type {?|undefined} */
    NgxCountriesOptions.prototype.locales;
    /** @type {?|undefined} */
    NgxCountriesOptions.prototype.defaultLocale;
}
/**
 * @param {?} locales
 * @param {?} defaultLocale
 * @return {?}
 */
function NgxCountriesLocalesFactory(locales, defaultLocale) {
    locales = locales || [defaultLocale];
    if (!locales.includes(defaultLocale)) {
        locales.push(defaultLocale);
    }
    locales.forEach((/**
     * @param {?} locale
     * @return {?}
     */
    locale => {
        registerLocale(require(`i18n-iso-countries/langs/${locale}.json`));
    }));
    return new NgxCountriesIsoService(defaultLocale);
}
class NgxCountriesModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options = {}) {
        return {
            ngModule: NgxCountriesModule,
            providers: [
                {
                    provide: NGX_COUNTRIES_DEFAULT_LOCALE,
                    useValue: options.defaultLocale || 'en'
                },
                {
                    provide: NGX_COUNTRIES_LOCALES,
                    useValue: options.locales || (options.defaultLocale ? [options.defaultLocale] : ['en'])
                },
                {
                    provide: NgxCountriesIsoService,
                    useFactory: NgxCountriesLocalesFactory,
                    deps: [NGX_COUNTRIES_LOCALES, NGX_COUNTRIES_DEFAULT_LOCALE]
                }
            ]
        };
    }
}
NgxCountriesModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxCountriesModule });
NgxCountriesModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxCountriesModule_Factory(t) { return new (t || NgxCountriesModule)(); }, providers: [NgxCountriesIsoService] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxCountriesModule, [{
        type: NgModule,
        args: [{
                providers: [NgxCountriesIsoService]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-countries-core.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxCountriesIsoService, NgxCountriesLocalesFactory, NgxCountriesModule, NGX_COUNTRIES_DEFAULT_LOCALE as ɵa, NGX_COUNTRIES_LOCALES as ɵb };

//# sourceMappingURL=ngx-countries-core.js.map