import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

class OpenCmeService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: OpenCmeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: OpenCmeService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: OpenCmeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class OpenCmeComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: OpenCmeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.3", type: OpenCmeComponent, isStandalone: true, selector: "lib-open-cme", ngImport: i0, template: `
    <p>
      open-cme works!
    </p>
  `, isInline: true, styles: [""], dependencies: [{ kind: "ngmodule", type: BrowserModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.3", ngImport: i0, type: OpenCmeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-open-cme', standalone: true, imports: [BrowserModule], template: `
    <p>
      open-cme works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of open-cme
 */

/**
 * Generated bundle index. Do not edit.
 */

export { OpenCmeComponent, OpenCmeService };
//# sourceMappingURL=open-cme.mjs.map
